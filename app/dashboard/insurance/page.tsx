'use client';

import * as React from 'react';
import { Box, Container, Button, Typography, Stack, useTheme } from '@mui/material';
import ShieldMoonRoundedIcon from '@mui/icons-material/ShieldMoonRounded';

import GuaranteeHero from './GuaranteeHero';
import DurationSelector from './DurationSelector';
import WeightInput from './WeightInput';
import GuaranteeInvoice from './GuaranteeInvoice';
import GuaranteeNotice from './GuaranteeNotice';
import UserGuaranteesList, { UserGuaranteesListRef } from './UserGuaranteesList';

import { GuaranteeInfoData, GuaranteePlan } from '@/app/core/Types';
import { createGuarantee, getGuaranteeInfo } from '@/lib/guaranteeService/guaranteeService';

export default function InsurancePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [loading, setLoading] = React.useState<boolean>(true);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [infoData, setInfoData] = React.useState<GuaranteeInfoData | null>(null);
  const [selectedPlanId, setSelectedPlanId] = React.useState<number | null>(null);
  const [goldWeight, setGoldWeight] = React.useState<string>('1');

  // رفرنس به کامپوننت لیست جهت ریفرش شدن پس از ثبت موفق
  const userGuaranteesRef = React.useRef<UserGuaranteesListRef>(null);

  // دریافت اطلاعات اولیه از بک‌اند
  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const result = await getGuaranteeInfo();
    if (result) {
      setInfoData(result);
      if (result.plans && result.plans.length > 0) {
        setSelectedPlanId(result.plans[0].id);
      }
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const selectedPlan: GuaranteePlan | undefined = React.useMemo(() => {
    return infoData?.plans.find((p) => p.id === selectedPlanId);
  }, [infoData, selectedPlanId]);

  const goldWeightNum = parseFloat(goldWeight) || 0;

  // ۱. بررسی موجودی طلا
  const hasEnoughGold = React.useMemo(() => {
    if (!infoData) return true;
    return goldWeightNum <= infoData.accessible_gold;
  }, [goldWeightNum, infoData]);

  // ۲. بررسی موجودی تومانی برای کارمزد
  const hasEnoughToman = React.useMemo(() => {
    if (!infoData || !selectedPlan || goldWeightNum <= 0) return true;

    const guaranteedPriceTotal = infoData.gold_price * goldWeightNum;
    const feePercent = parseFloat(selectedPlan.service_fee_percent) || 0;
    const serviceFeeTotal = (guaranteedPriceTotal * feePercent) / 100;

    return serviceFeeTotal <= infoData.accessible_toman;
  }, [infoData, selectedPlan, goldWeightNum]);

  // اعتبارسنجی کلی فرم
  const isValid = React.useMemo(() => {
    if (!selectedPlanId || goldWeightNum <= 0 || !infoData) return false;
    return hasEnoughGold && hasEnoughToman;
  }, [selectedPlanId, goldWeightNum, infoData, hasEnoughGold, hasEnoughToman]);

  // ثبت نهایی تضمین
  const handleConfirm = async () => {
    if (!selectedPlanId || !isValid) return;

    setSubmitting(true);
    const response = await createGuarantee({
      plan_id: selectedPlanId,
      gold_weight: goldWeight,
    });

    if (response) {
      await fetchData();
      userGuaranteesRef.current?.refreshList();
    }
    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        bgcolor: theme.palette.background.default,
        transition: 'background-color 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: { xs: 2, sm: 3, md: 4, lg: 6 },
      }}
    >
      <Container
        maxWidth={'xl'}
        disableGutters
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* ۱. کارت اصلی ثبت تضمین */}
        <Box
          sx={{
            boxShadow: isDark
              ? '0 20px 50px rgba(0,0,0,0.4)'
              : '0 16px 48px rgba(28,28,26,0.06)',
            borderRadius: { xs: 3, sm: 4, md: 6 },
            border: `1px solid ${theme.palette.background.border}`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            bgcolor: theme.palette.background.default,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
            }}
          >
            {/* ستون راست: اطلاعات و توضیحات هیرو */}
            <GuaranteeHero />

            {/* ستون چپ: فرم انتخاب دوره، وزن و فاکتور */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                px: { xs: 2.5, sm: 3.5, md: 4 },
                py: { xs: 2, md: 3 },
              }}
            >
              <DurationSelector
                plans={infoData?.plans || []}
                selectedPlanId={selectedPlanId}
                onSelectPlan={(id) => setSelectedPlanId(id)}
                loading={loading}
              />

              <WeightInput
                goldWeight={goldWeight}
                setGoldWeight={setGoldWeight}
                accessibleGold={infoData?.accessible_gold || 0}
                loading={loading}
              />

              <GuaranteeInvoice
                accessibleGold={infoData?.accessible_gold || 0}
                accessibleToman={infoData?.accessible_toman || 0}
                goldPrice={infoData?.gold_price || 0}
                selectedPlan={selectedPlan}
                goldWeightNum={goldWeightNum}
                loading={loading}
              />

              {/* کامپوننت نوتیس همراه با پاس دادن وضعیت موجودی‌ها */}
              <GuaranteeNotice 
                hasEnoughGold={hasEnoughGold} 
                hasEnoughToman={hasEnoughToman} 
              />
            </Box>
          </Box>

          {/* دکمه ثبت فرم */}
          <Box
            sx={{
              p: { xs: 2.5, sm: 3, md: 4 },
              borderTop: `1px solid ${theme.palette.background.border}`,
              bgcolor: isDark ? '#1C1C1A' : '#FFFFFF',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              disabled={!isValid || loading || submitting}
              onClick={handleConfirm}
              sx={{
                py: { xs: 1.5, md: 1.8 },
                fontSize: { xs: 15, md: 16 },
                fontWeight: 800,
                borderRadius: 3,
                bgcolor: theme.palette.primary.main,
                color: '#10100F',
                boxShadow: isDark ? 'none' : '0 10px 24px rgba(252, 213, 53, 0.25)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: theme.palette.primary.light,
                  transform: 'translateY(-1px)',
                  boxShadow: isDark ? 'none' : '0 12px 28px rgba(252, 213, 53, 0.35)',
                },
                '&:active': {
                  transform: 'translateY(1px)',
                },
                '&.Mui-disabled': {
                  bgcolor: isDark ? '#292926' : '#EFEEEC',
                  color: theme.palette.text.muted,
                },
              }}
            >
              {submitting ? 'در حال ثبت تراکنش...' : 'تایید و فعال‌سازی تضمین'}
            </Button>
          </Box>
        </Box>

        {/* ۲. بخش لیست تضمین‌های فعال و قبلی کاربر */}
        <Box sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5, px: 0.5 }}>
            <ShieldMoonRoundedIcon
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: 24, sm: 28 },
              }}
            />
            <Typography
              variant="h6"
              fontWeight={800}
              sx={{
                color: theme.palette.text.title,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
              }}
            >
              تضمین‌های فعال و قبلی شما
            </Typography>
          </Stack>

          {/* کامپوننت لیست تضمین‌ها */}
          <UserGuaranteesList ref={userGuaranteesRef} />
        </Box>
      </Container>
    </Box>
  );
}
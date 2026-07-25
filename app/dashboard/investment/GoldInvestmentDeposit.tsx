'use client';

import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useTheme,
  alpha,
  Grid,
  CircularProgress,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useEffect, useMemo, useState } from 'react';
import Container from '@/app/Components/Containers/Container/Container';
import InputField from '@/app/Components/InputField/InputField';
import { useAssets } from '@/app/AssetsProvider';
import priceFormatter from '@/app/core/PriceFormater';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';
 
import { InvestmentPlan, createInvestment,getInvestmentInfo, } from '@/lib/investment/investment';

interface GoldInvestmentDepositProps {
  onIncreaseBalance?: () => void;
  onSuccess?: () => void;
}

export default function GoldInvestmentDeposit({
  onIncreaseBalance,
  onSuccess,
}: GoldInvestmentDepositProps) {
  const theme = useTheme();
  const { refetch } = useAssets();

  const [amount, setAmount] = useState<string>('');
  const [plans, setPlans] = useState<InvestmentPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
  const [accessibleGold, setAccessibleGold] = useState<number>(0);

  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const fetchInfo = async () => {
    try {
      setIsFetchLoading(true);
      const res = await getInvestmentInfo();
        setPlans(res.data.plans.filter((p) => p.is_active));
        setAccessibleGold(res.data.accessible_gold);
        if (res.data.plans.length > 0) {
          setSelectedPlan(res.data.plans[0]);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        showSnackbar(
          error.response?.data?.message || 'خطا در دریافت اطلاعات سرمایه‌گذاری',
          'error'
        );
      }
    } finally {
      setIsFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const numericAmount = Number(amount) || 0;
  const insufficientBalance = numericAmount > accessibleGold;

  const monthlyGold = useMemo(() => {
    if (!numericAmount || insufficientBalance || !selectedPlan) return 0;
    const monthlyRate = Number(selectedPlan.monthly_profit_percent);
    return (numericAmount * monthlyRate) / 100;
  }, [numericAmount, selectedPlan, insufficientBalance]);

  const totalGold = useMemo(() => {
    if (!numericAmount || insufficientBalance || !selectedPlan) return 0;
    const totalRate = Number(selectedPlan.total_profit_percent);
    return (numericAmount * totalRate) / 100;
  }, [numericAmount, selectedPlan, insufficientBalance]);

  const handleConfirm = async () => {
    if (!numericAmount || insufficientBalance || !selectedPlan) return;

    try {
      setIsSubmitting(true);
      const response = await createInvestment({
        plan_id: selectedPlan.id,
        gold_weight: numericAmount.toFixed(3),
      });

      showSnackbar(
        response.data.message || 'سرمایه‌گذاری با موفقیت ثبت شد',
        'success'
      );

      setAmount('');
      await refetch();
      await fetchInfo();
      onSuccess?.();
    } catch (error) {
      if (isAxiosError(error)) {
        showSnackbar(
          error.response?.data?.message || 'خطا در ثبت سرمایه‌گذاری',
          'error'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const palette = {
    rowBg: theme.palette.background.paper,
    rowBorder: theme.palette.background.border,
    selectedBorder: theme.palette.primary.main,
    selectedBg: alpha(
      theme.palette.primary.main,
      theme.palette.mode === 'dark' ? 0.14 : 0.1
    ),
    warnBg: alpha(
      theme.palette.error.main,
      theme.palette.mode === 'dark' ? 0.12 : 0.08
    ),
    warnText: theme.palette.error.main,
    gold: theme.palette.primary.main,
    goldContrast: theme.palette.getContrastText(theme.palette.primary.main),
    green: theme.palette.success.main,
  };

  return (
    <Grid container spacing={{ xs: 2, sm: 1, lg: 3 }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Container>
          <Typography variant="h6" fontWeight={700} color="text.title">
            سرمایه‌گذاری دارینه
          </Typography>

          <Stack spacing={0.5} mt={3} direction="column" alignItems="center" mb={2}>
            <Typography variant="body2" color="text.subtitle">
              موجودی طلای قابل سرمایه‌گذاری
            </Typography>
            <Typography variant="body1" fontWeight={600} color="text.primary">
              {priceFormatter(accessibleGold)} گرم
            </Typography>
          </Stack>

          <InputField
            type="number"
            placeholder="مقدار طلا (حداقل ۱ گرم)"
            title="گرم"
            value={amount}
            setValue={setAmount}
          />

          <Button
            fullWidth
            onClick={() => setAmount(accessibleGold.toString())}
            sx={{
              mt: 1.5,
              py: 1.2,
              bgcolor: palette.rowBg,
              border: `1px solid ${palette.rowBorder}`,
              color: 'text.primary',
              fontWeight: 500,
              width: 'fit-content',
            }}
          >
            انتخاب کل موجودی
          </Button>

          {insufficientBalance && (
            <Paper
              elevation={0}
              sx={{
                mt: 2,
                p: 2.5,
                textAlign: 'center',
                bgcolor: palette.warnBg,
                borderRadius: 2,
              }}
            >
              <Typography color={palette.warnText} fontWeight={600} mb={1.5}>
                موجودی طلای شما کافی نیست
              </Typography>
              <Button
                onClick={onIncreaseBalance}
                startIcon={<AddRoundedIcon />}
                sx={{
                  bgcolor: palette.rowBg,
                  border: `1px solid ${palette.rowBorder}`,
                  color: 'text.primary',
                  fontWeight: 600,
                  px: 3,
                }}
              >
                افزایش موجودی طلا
              </Button>
            </Paper>
          )}

          <Typography variant="body2" color="text.subtitle" mt={3} mb={1.5}>
            مدت سپرده‌گذاری:
          </Typography>

          {isFetchLoading ? (
            <Stack alignItems="center" py={3}>
              <CircularProgress size={28} />
            </Stack>
          ) : (
            <Stack spacing={1.25}>
              {plans.map((plan) => {
                const selected = plan.id === selectedPlan?.id;
                return (
                  <Box
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 2,
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: selected ? palette.selectedBg : palette.rowBg,
                      border: `1.5px solid ${
                        selected ? palette.selectedBorder : palette.rowBorder
                      }`,
                      transition:
                        'border-color .15s ease, background-color .15s ease',
                    }}
                  >
                    <Typography
                      fontWeight={selected ? 700 : 500}
                      color="text.primary"
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      fontSize={14}
                      color={palette.green}
                      fontWeight={600}
                    >
                      {priceFormatter(+plan.total_profit_percent)}٪ سود کل
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          )}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Typography variant="body2" color="text.subtitle">
              طلای دریافتی ماهانه
            </Typography>
            <Typography fontWeight={600} color="text.primary">
              {priceFormatter(monthlyGold)} گرم
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <Typography variant="body2" color="text.subtitle">
              طلای دریافتی طرح
            </Typography>
            <Typography fontWeight={600} color="text.primary">
              {priceFormatter(totalGold)} گرم
            </Typography>
          </Stack>

          <Button
            fullWidth
            onClick={handleConfirm}
            disabled={
              !numericAmount ||
              insufficientBalance ||
              isSubmitting ||
              !selectedPlan
            }
            sx={{
              mt: 3,
              py: 1.5,
              bgcolor: palette.gold,
              color: palette.goldContrast,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 2,
              '&:hover': { bgcolor: theme.palette.primary.light },
              '&.Mui-disabled': {
                bgcolor: palette.gold,
                color: palette.goldContrast,
                opacity: 0.5,
              },
            }}
          >
            {isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'تایید'
            )}
          </Button>
        </Container>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Container>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-start"
          >
            <InfoOutlinedIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
            <Typography fontWeight={700} color="text.title">
              توجه
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.subtitle"
            mt={1.5}
            textAlign="left"
            lineHeight={2}
          >
            مقداری از طلای خود را برای مدت مشخص در طرح سرمایه‌گذاری قرار دهید و بدون
            نیاز به فروش، سود دریافت کنید. هرچه مدت زمان طرح بیشتر باشد، سود بیشتر
            به شما تعلق می‌گیرد و سود شما به‌صورت ماهانه به کیف پول طلای شما اضافه
            می‌شود. در پایان دوره نیز اصل طلای سپرده‌گذاری‌شده، آزاد و به کیف پولتان
            بازمی‌گردد.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}
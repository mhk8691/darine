"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Skeleton,
  Button,
  Snackbar,
  Alert,
  Stack,
  useTheme,
  Divider
} from "@mui/material";
import ShieldMoonRoundedIcon from "@mui/icons-material/ShieldMoonRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useAssets } from "@/app/AssetsProvider";
import priceFormatter from "@/app/core/PriceFormater";

type Duration = 1 | 3 | 6 | 12;

interface InsurancePlan {
  id: string;
  weightGrams: number;
  guaranteedPrice: number;
}

interface PlansResponse {
  plans: InsurancePlan[];
  userGoldBalanceGrams: number;
}

const fa = (n: number) => n.toLocaleString("fa-IR");

export default function InsurancePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {assets} = useAssets()
  const [duration, setDuration] = React.useState<Duration>(3);
  const [data, setData] = React.useState<PlansResponse | null>(null);
  const [selectedPlanId, setSelectedPlanId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [confirming, setConfirming] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const fetchPlans = React.useCallback(async (forDuration: Duration) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/insurance/plans?duration=${forDuration}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("network");
      const json: PlansResponse = await res.json();
      setData(json);
      
      setSelectedPlanId((prev) => {
        const stillValid = json.plans.find((p) => p.id === prev);
        if (stillValid) return stillValid.id;
        const defaultPlan = json.plans.find((p) => p.weightGrams === 2) ?? json.plans[0];
        return defaultPlan?.id ?? null;
      });
    } catch {

      setData({
        userGoldBalanceGrams: 18.450,
        plans: [
          { id: "1", weightGrams: 1, guaranteedPrice: 4420000 },
          { id: "2", weightGrams: 2, guaranteedPrice: 8840000 },
          { id: "3", weightGrams: 5, guaranteedPrice: 22100000 },
          { id: "4", weightGrams: 10, guaranteedPrice: 44200000 },
        ]
      });
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchPlans(duration);
  }, [duration, fetchPlans]);

  const selectedPlan = data?.plans.find((p) => p.id === selectedPlanId);

  const handleDurationChange = (
    _: React.MouseEvent<HTMLElement>,
    value: Duration | null
  ) => {
    if (value !== null) setDuration(value);
  };

  const handleConfirm = async () => {
    if (!selectedPlan) return;
    setConfirming(true);
    try {
      const res = await fetch("/api/insurance/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: selectedPlan.id }),
      });
      const json = await res.json();
      setSnackbar({
        open: true,
        severity: json.success ? "success" : "error",
        message: json.message,
      });
    } catch {
      setSnackbar({
        open: true,
        severity: "error",
        message: "ارتباط با سرور برقرار نشد.",
      });
    } finally {
      setConfirming(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: "100dvh", 
        bgcolor: theme.palette.background.default, 
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "center",
        p: { xs: 0, sm: 3, md: 6, lg: 8 },
        borderRadius:3
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 540, md: 860, lg: 1100 },
          boxShadow: isDark ? "0 20px 50px rgba(0,0,0,0.3)" : "0 16px 48px rgba(28,28,26,0.06)",
          borderRadius: { xs: 3, sm: 6 },
          border: `1px solid ${theme.palette.background.border}`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
  

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            pt:3
          }}
        >
          {/* رِیل اطلاعاتی: هیرو + توضیحات + مزایا (فقط در دسکتاپ به صورت رِیل ثابت کنار فرم می‌نشیند) */}
          <Box
            sx={{
              flex: { md: "0 0 300px", lg: "0 0 336px" },
              px: { xs: 2.5, sm: 4, md: 4 },
              pt: 1,
              pb: { xs: 0, md: 4 },
              borderInlineEnd: { md: `1px solid ${theme.palette.background.border}` },
              position: { md: "sticky" },
              top: { md: 0 },
              alignSelf: { md: "flex-start" },
            }}
          >
            <Stack
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ mb: 4 }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 4,
                  background: isDark 
                    ? `linear-gradient(135deg, rgba(252, 213, 53, 0.15) 0%, rgba(252, 213, 53, 0.02) 100%)` 
                    : `linear-gradient(135deg, #FDE378 0%, #FCD535 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: isDark ? "none" : "0 8px 20px rgba(252, 213, 53, 0.3)",
                  border: isDark ? `1px solid rgba(252, 213, 53, 0.2)` : "none"
                }}
              >
                <ShieldMoonRoundedIcon sx={{ fontSize: 36, color: isDark ? theme.palette.primary.main : '#10100F' }} />
              </Box>
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{ color: theme.palette.text.title, letterSpacing: '-0.5px', mb: 1, fontSize: { xs: '1.5rem', md: '1.6rem' } }}
              >
                تضمین قیمت دارینه
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.subtitle, lineHeight: 1.8, maxWidth: { xs: 380, md: "100%" } }}>
                با فعال‌سازی این طرح، نوسانات منفی بازار طلا در روز سررسید کاملاً جبران شده و دارینه خسارت شما را پرداخت می‌کند.
              </Typography>

              {/* مزایای کلیدی: فقط در دسکتاپ نمایش داده می‌شود تا از فضای خالی رِیل کناری استفاده شود */}
              <Stack spacing={1.5} sx={{ display: { xs: "none", md: "flex" }, mt: 3, width: "100%" }}>
                {[
                  "پوشش کامل افت قیمت طلا در سررسید",
                  "واریز خسارت به کیف پول در کمتر از ۲۴ ساعت",
                  "بدون نیاز به ضامن یا وثیقه",
                ].map((item) => (
                  <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                    <CheckCircleRoundedIcon sx={{ fontSize: 18, color: theme.palette.primary.main, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500, lineHeight: 1.7 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* ستون فرم: انتخاب دوره، انتخاب وزن و فاکتور */}
          <Box sx={{ flex: 1, minWidth: 0, px: { xs: 2.5, sm: 4 }, pb: 4, pt: { xs: 0, md: 1 } }}>

          {/* سکشن انتخاب دوره زمانی با طراحی پیوسته */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.primary, mb: 1.5, px: 0.5 }}>
              ۱. انتخاب دوره تعهد
            </Typography>
            <ToggleButtonGroup
              value={duration}
              exclusive
              onChange={handleDurationChange}
              fullWidth
              sx={{
                bgcolor: isDark ? '#10100F' : '#FFFFFF',
                borderRadius: 3,
                p: 0.5,
                border: `1px solid ${theme.palette.background.border}`,
                "& .MuiToggleButton-root": {
                  border: "none",
                  borderRadius: 2.5,
                  py: 1.2,
                  color: theme.palette.text.subtitle,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flex: 1,
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&.Mui-selected": {
                    bgcolor: isDark ? '#292926' : '#EFEEEC',
                    color: isDark ? theme.palette.primary.main : '#1C1C1A',
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: isDark ? '#292926' : '#EFEEEC',
                  },
                },
              }}
            >
              <ToggleButton value={3}>۳ ماهه</ToggleButton>
              <ToggleButton value={6}>۶ ماهه</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.primary, mb: 1.5, px: 0.5 }}>
              ۲. مقدار طلا جهت تضمین
            </Typography>
            
            {error && <Alert severity="error" sx={{ mb: 2, borderRadius: 3 }}>{error}</Alert>}

            <Grid container spacing={2}>
              {loading || !data
                ? Array.from({ length: 4 }).map((_, i) => (
                    <Grid size={{
                      xs:6,
                      md:3
                    }} key={i}>
                      <Skeleton variant="rounded" height={84} sx={{ borderRadius: 3 }} />
                    </Grid>
                  ))
                : data.plans.map((plan) => {
                    const selected = plan.id === selectedPlanId;
                    return (
                      <Grid size={{
                        xs:6,
                        md:4,
                        lg:3  
                      }} key={plan.id}>
                        <Box
                          component="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          sx={{
                            width: "100%",
                            textAlign: "left",
                            cursor: "pointer",
                            font: "inherit",
                            bgcolor: selected 
                              ? (isDark ? 'rgba(252, 213, 53, 0.04)' : '#FAF9F6')
                              : (isDark ? '#10100F' : '#FFFFFF'),
                            border: "2px solid",
                            borderColor: selected ? theme.palette.primary.main : theme.palette.background.border,
                            borderRadius: 3,
                            p: 2.5,
                            transition: "all 0.2s ease",
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.5,
                            position: 'relative',
                            overflow: 'hidden',
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&::before": selected ? {
                              content: '""',
                              position: 'absolute',
                              top: 0, left: 0, width: 4, height: '100%',
                              bgcolor: theme.palette.primary.main
                            } : {}
                          }}
                        >
                          <Typography variant="h6" fontWeight={900} sx={{ color: theme.palette.text.title }}>
                            {fa(plan.weightGrams)}{" "}
                            <Typography component="span" variant="body2" fontWeight={500} sx={{ color: theme.palette.text.secondary }}>
                              گرم
                            </Typography>
                          </Typography>
                          <Typography variant="caption" sx={{ color: theme.palette.text.muted, fontWeight: 500 }}>
                           تضمین طلا کوتاه مدت
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
            </Grid>
          </Box>

          {/* فاکتور حسابداری پیشرفته و گلس‌مورفیک */}
          <Box 
            sx={{ 
              bgcolor: isDark ? '#10100F' : '#FFFFFF', 
              borderRadius: 4, 
              border: `1px solid ${theme.palette.background.border}`,
              overflow: 'hidden',
              mb: 3
            }}
          >
            {/* ردیف موجودی کیف پول طلا */}
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>موجودی طلای شما</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
                {loading || !data ? <Skeleton width={60} /> : `${fa(data.userGoldBalanceGrams)} گرم`}
              </Typography>
            </Box>
             <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>قیمت تضمین طلا</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
                {loading || !data ? <Skeleton width={60} /> : `${priceFormatter(assets.gold_price)} تومان`}
              </Typography>
            </Box>
             <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>هزینه طرح تضمین طلا</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
                {loading || !data ? <Skeleton width={60} /> : `${priceFormatter(1800000)} تومان`}
              </Typography>
            </Box>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>قیمت لحظه‌ای طلا</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
                {loading || !data ? <Skeleton width={60} /> : `${priceFormatter(assets.gold_price)} تومان`}
              </Typography>
            </Box>
                       <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>تاریخ سر رسید</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
                {loading || !data ? <Skeleton width={60} /> : '۱۵ مهر ۱۴۰۵'}
              </Typography>
            </Box>
            
            
            <Divider sx={{ borderColor: theme.palette.background.border }} />

            {/* ردیف قیمت تضمین نهایی */}
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.primary }}>کارمزد نهایی تضمین قیمت</Typography>
              <Typography variant="subtitle1" fontWeight={900} sx={{ color: theme.palette.primary.main }}>
                {loading || !selectedPlan ? <Skeleton width={80} /> : `${fa(selectedPlan.guaranteedPrice)} تومان`}
              </Typography>
            </Box>
          </Box>

          {/* نوتیفیکیشن آموزشی پایین صفحه */}
          <Stack 
            direction="row" 
            spacing={1.5} 
            alignItems="flex-start"
            sx={{ 
              p: 2, 
              borderRadius: 3, 
              border: `1px solid ${isDark ? 'rgba(109, 169, 225, 0.15)' : 'rgba(109, 169, 225, 0.2)'}`,
              bgcolor: isDark ? 'rgba(109, 169, 225, 0.02)' : 'rgba(109, 169, 225, 0.04)'
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main, mt: 0.2 }} />
            <Box>
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', lineHeight: 1.6, fontWeight: 500 }}>
                محاسبه قیمت مبنای تضمین، بر اساس قیمت طلای ۱۸ عیار لحظه‌ای در زمان تایید تراکنش انجام می‌شود.
        
              </Typography>
            </Box>
          </Stack>

          </Box>
          {/* پایان ستون فرم */}
        </Box>

        {/* دکمه اکشن بار عریض و بزرگ */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderTop: `1px solid ${theme.palette.background.border}`,
            bgcolor: isDark ? '#1C1C1A' : '#FFFFFF',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            disabled={!selectedPlan || loading || confirming}
            onClick={handleConfirm}
            sx={{
              py: 1.8,
              fontSize: 16,
              fontWeight: 800,
              borderRadius: 3,
              bgcolor: theme.palette.primary.main,
              color: '#10100F',
              boxShadow: isDark ? 'none' : '0 10px 24px rgba(252, 213, 53, 0.25)',
              transition: 'all 0.2s ease',
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                transform: 'translateY(-1px)',
                boxShadow: isDark ? 'none' : '0 12px 28px rgba(252, 213, 53, 0.35)',
              },
              "&:active": {
                transform: 'translateY(1px)',
              },
              "&.Mui-disabled": {
                bgcolor: isDark ? '#292926' : '#EFEEEC',
                color: theme.palette.text.muted,
              }
            }}
          >
            {confirming ? "در حال ثبت تراکنش..." : "تایید و فعال‌سازی تضمین"}
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          sx={{ width: "100%", borderRadius: 3 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 
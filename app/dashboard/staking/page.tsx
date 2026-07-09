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
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useMemo, useState } from 'react';
import Container from '@/app/Components/Containers/Container/Container';
import InputField from '@/app/Components/InputField/InputField';
import { useAssets } from '@/app/AssetsProvider';
import priceFormatter from '@/app/core/PriceFormater';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface DurationOption {
  id: number;
  months: number;
  label: string;
  rate: number; 
}

interface GoldInvestmentDepositProps {
  onIncreaseBalance?: () => void;
  onConfirm?: (payload: { amount: number; duration: DurationOption }) => void;
}

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const DURATION_OPTIONS: DurationOption[] = [
  { id: 1, months: 1, label: '۱ ماهه', rate: 15.5 },
  { id: 2, months: 3, label: '۳ ماهه', rate: 5.6 },
  { id: 3, months: 6, label: '۶ ماهه', rate: 1.26 },
  { id: 4, months: 9, label: '۹ ماهه', rate: 2.07 },
  { id: 5, months: 12, label: '۱۲ ماهه', rate: 3 },
];


export default function GoldInvestmentDeposit({
  onIncreaseBalance,
  onConfirm,
}: GoldInvestmentDepositProps) {
  const theme = useTheme();

  const [amount, setAmount] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<DurationOption>(
    DURATION_OPTIONS[0]
  );
  const {assets} = useAssets()
  const numericAmount = Number(amount) || 0;
  const insufficientBalance = numericAmount > assets.gold_balance;

  const monthlyGold = useMemo(() => {
    if (!numericAmount || insufficientBalance) return 0;
    return (numericAmount * selectedDuration.rate) / 100 / selectedDuration.months;
  }, [numericAmount, selectedDuration, insufficientBalance]);

  const totalGold = useMemo(() => {
    if (!numericAmount || insufficientBalance) return 0;
    return (numericAmount * selectedDuration.rate) / 100;
  }, [numericAmount, selectedDuration, insufficientBalance]);


  const handleConfirm = () => {
    if (!numericAmount || insufficientBalance) return;
    onConfirm?.({ amount: numericAmount, duration: selectedDuration });
  };

  const palette = {
    cardBg: theme.palette.background.default,
    cardBorder: theme.palette.background.border,
    rowBg: theme.palette.background.paper,
    rowBorder: theme.palette.background.border,
    selectedBorder: theme.palette.primary.main,
    selectedBg: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.14 : 0.1),
    warnBg: alpha(theme.palette.error.main, theme.palette.mode === 'dark' ? 0.12 : 0.08),
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

          <Stack spacing={0.5} mt={3} direction={'column'} alignItems={'center'} mb={2}>
            <Typography variant="body2" color="text.subtitle">
              موجودی طلای قابل سرمایه‌گذاری
            </Typography>
            <Typography variant="body1" fontWeight={600} color="text.primary">
              {priceFormatter(assets.gold_balance)} گرم
            </Typography>
          </Stack>

          
          <InputField type='number' placeholder="مقدار طلا (حداقل ۱ گرم)" title="تومان" value={amount} setValue={setAmount} />

          <Button
            fullWidth
            onClick={()=>setAmount(assets.gold_balance.toString())}
            sx={{
              mt: 1.5,
              py: 1.2,
              bgcolor: palette.rowBg,
              border: `1px solid ${palette.rowBorder}`,
              color: 'text.primary',
              fontWeight: 500,
              width:'fit-content'
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

          <Stack spacing={1.25}>
            {DURATION_OPTIONS.map((option) => {
              const selected = option.id === selectedDuration.id;
              return (
                <Box
                  key={option.id}
                  onClick={() => setSelectedDuration(option)}
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
                    transition: 'border-color .15s ease, background-color .15s ease',
                  }}
                >
                  <Typography fontWeight={selected ? 700 : 500} color="text.primary">
                    {option.label}
                  </Typography>
                  <Typography fontSize={14} color={palette.green} fontWeight={600}>
                   {priceFormatter(option.rate)}٪  سود دهی 
                  </Typography>
                </Box>
              );
            })}
          </Stack>

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
            disabled={!numericAmount || insufficientBalance}
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
            تایید
          </Button>
          </Container>
      </Grid>

      {/* ---------------------------------------------------------------- */}
      {/* پنل توجه                                                         */}
      {/* ---------------------------------------------------------------- */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Container>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
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
          نیاز به فروش، سود دریافت کنید. هرچه مدت زمان طرح بیشتر باشد، سود بیشتری
          به شما تعلق می‌گیرد و سود شما به‌صورت ماهانه به کیف پول طلای شما اضافه
          می‌شود. در پایان دوره نیز اصل طلای سپرده‌گذاری‌شده، آزاد و به کیف پولتان
          بازمی‌گردد.
        </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

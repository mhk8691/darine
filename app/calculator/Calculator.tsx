'use client';
import { Box, Grid, Stack, SxProps, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
const inputStyle: SxProps = {
  width: '100%',

  '& .MuiInputLabel-root': {
    color: '#fff',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff',
  },

  '& .MuiInputLabel-root.MuiFormLabel-filled': {
    color: '#fff',
  },

  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    color: 'text.title',
    fontSize: '18',
    fontWeight: 'bold',
  },

  '& .MuiOutlinedInput-root': {
    '& input': {
      textAlign: 'center',
      py: 1.8,
    },
    borderRadius: 2.5,

    '& fieldset': {
      borderColor: '#494949',
    },
    '&:hover fieldset': {
      borderColor: '#494949',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#494949',
    },
    '&.Mui-disabled fieldset': {
      borderColor: '#494949',
    },
  },
};
export default function Calculator() {
  const [goldRate, setGoldRate] = useState(17612000);
  const [weight, setWeight] = useState(0);
  const [wagePercent, setWagePercent] = useState(18);
  const [profitPercent, setProfitPercent] = useState(7);

  const calculated = useMemo(() => {
    const gPrice = weight * goldRate;

    const w = gPrice * (wagePercent / 100);

    const p = (gPrice + w) * (profitPercent / 100);

    const t = (p + w) * 0.09;

    const profitOne = gPrice * 0.01;

    const total = gPrice + w + p + t;

    return {
      goldPrice: Math.round(gPrice),
      wage: Math.round(w),
      profit: Math.round(p),
      tax: Math.round(t),
      profitOne: Math.round(profitOne),
      total: Math.round(total),
    };
  }, [goldRate, weight, wagePercent, profitPercent]);
  return (
    <>
      <Grid container size={12} spacing={3}>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="نرخ طلا"
            value={goldRate}
            onChange={(e) => setGoldRate(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="وزن طلا"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="اجرت ساخت"
            value={wagePercent}
            onChange={(e) => setWagePercent(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="سود فروش"
            value={profitPercent}
            onChange={(e) => setProfitPercent(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        spacing={2}
        container
        mt={2}
      >
        <Stack py={2.5} width={'100%'} bgcolor={'#B29727'} borderRadius={4}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 14,
            }}
            width={'100%'}
            textAlign={'center'}
          >
            خرید طلا از بازار
          </Typography>
        </Stack>
        <Stack
          p={3}
          width={'100%'}
          bgcolor={'#E5C231'}
          borderRadius={4}
          direction={'column'}
          gap={2}
          height={300}
        >
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                قیمت طلای محصول:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                وزن ✕ نرخ روز طلا
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.goldPrice.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                اجرت ساخت:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                قیمت طلا ✕ 18 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.wage.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                سود فروش طلا:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                (قیمت طلا + اجرت ساخت) ✕ 7 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.profit.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                مالیات:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                (سود فروش طلا + اجرت ساخت) ✕ 9 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.tax.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
        </Stack>
        <Stack py={2.5} width={'100%'} bgcolor={'#E5C231'} borderRadius={4}>
          <Typography
            variant="body1"
            fontSize={14}
            width={'100%'}
            textAlign={'center'}
            color="background.default"
            fontWeight={600}
          >
            مجموع: {calculated.total.toLocaleString()} تومان
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        spacing={2}
        container
        mt={2}
      >
        <Stack py={2.5} width={'100%'} bgcolor={'#B29727'} borderRadius={4}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 14,
            }}
            width={'100%'}
            textAlign={'center'}
          >
            خرید طلا از دارینه
          </Typography>
        </Stack>
        <Stack
          p={3}
          width={'100%'}
          bgcolor={'#E5C231'}
          borderRadius={4}
          direction={'column'}
          gap={2}
          height={300}
        >
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                قیمت طلای محصول:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                وزن ✕ نرخ روز طلا
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.goldPrice.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'column'} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: 'background.default' }}
              >
                سود فروش طلا:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: '#393936' }}
                fontWeight={500}
              >
                قیمت طلا ✕ ۱.۰۰ %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: 'background.default',
              }}
            >
              {calculated.profitOne.toLocaleString()}
              <Box
                component={'span'}
                color={'background.paper'}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
        </Stack>
        <Stack py={2.5} width={'100%'} bgcolor={'#E5C231'} borderRadius={4}>
          <Typography
            variant="body1"
            fontSize={14}
            width={'100%'}
            textAlign={'center'}
            color="background.default"
            fontWeight={600}
          >
            مجموع:{' '}
            {calculated.profitOne + calculated.goldPrice > 0
              ? (calculated.profitOne + calculated.goldPrice).toLocaleString()
              : '۰'}{' '}
            تومان
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}

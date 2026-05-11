'use client';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

export default function Status() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Stack
      direction={'row'}
      justifyContent={{
        xs: 'center',
        sm: 'space-between',
      }}
      bgcolor={isDarkMode ? '#393936' : '#FEF2C0'}
      py={2}
      px={4}
      mt={2}
      spacing={0}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        justifyContent={{
          xs: 'center',
          sm: 'space-between',
        }}
        alignItems={'center'}
        gap={0.5}
        width={{
          xs: '50%',
          lg: 'auto',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'text.title' }}
          fontSize={{
            xs: 10,
            lg: 14,
            xl: 16,
          }}
        >
          قیمت لحظه ای طلا ۱۸ عیار(گرمی):
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            lg: 14,
            xl: 16,
          }}
        >
          17,799,000 تومان
          <Box component={'span'} ml={1} color={'error.dark'}>
            %-1.14
          </Box>
        </Typography>
      </Stack>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 1,
          borderColor: 'background.default',
          display: {
            xs: 'flex',
            lg: 'none',
          },
        }}
      />
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        alignItems={'center'}
        gap={0.5}
        justifyContent={'space-between'}
        width={{
          xs: '50%',
          lg: 'auto',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'text.title' }}
          fontSize={{
            xs: 10,
            lg: 14,
            xl: 16,
          }}
        >
          قیمت لحظه ای طلا 24 عیار(گرمی):
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            lg: 14,
            xl: 16,
          }}
        >
          23,613,340 تومان
          <Box component={'span'} ml={1} color={'error.dark'}>
            %-1.14
          </Box>
        </Typography>
      </Stack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        display={{
          xs: 'none',
          lg: 'flex',
        }}
        gap={1.5}
      >
        <Typography
          variant="body2"
          fontSize={{
            xs: 16,
            lg: 14,
            xl: 16,
          }}
        >
          امروز:
        </Typography>
        <Typography
          variant="body2"
          fontSize={{
            xs: 16,
            lg: 14,
            xl: 16,
          }}
          sx={{ color: 'text.title' }}
        >
          سه‌شنبه ۲۵ فروردین ۱۴۰۵ -۱۶:۳۲:۳۲
        </Typography>
      </Stack>
    </Stack>
  );
}

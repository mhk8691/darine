'use client';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { GiftIcon } from '../Components/CustomIcons/CustomIcons';
const options = [
  {
    title: 'همکاران',
    list: [
      'پاداش عملکرد',
      'هدایای مناسبتی (نوروز، یلدا، تولد)',
      'رفاهیات سازمانی',
      'قدردانی و سپاس‌گزاری',
    ],
  },
  {
    title: 'مشتریان',
    list: ['جایزه مسابقات', 'پاداش باشگاه مشتریان', 'قرعه‌کشی', 'مشتریان وفادار'],
  },
  {
    title: 'شرکای تجاری',
    list: ['هدایای سازمانی مناسبتی', 'قدردانی و سپاس‌گزاری', 'بازاریابی', 'تقویت روابط کاری'],
  },
];

export default function Gift() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Grid
      spacing={{
        xs: 3,
        md: 9,
      }}
      container
    >
      <Grid size={12}>
        <Typography
          variant="h1"
          fontSize={{
            xs: 16,
            sm: 30,
          }}
          fontWeight={'700'}
          sx={{ color: 'text.title' }}
        >
          کارت هدیه دارینه را به این افراد هدیه دهید...
        </Typography>
      </Grid>
      <Grid size={12} container>
        <Grid
          size={{
            xs: 0,
            lg: 2.5,
          }}
          display={{
            xs: 'none',
            lg: 'flex',
          }}
        >
          <GiftIcon />
        </Grid>
        <Grid
          size={{
            xs: 12,
            lg: 9.5,
          }}
          container
          spacing={{
            xs: 1,
            sm: 5,
            md: 10,
          }}
          alignItems={'center'}
        >
          {options.map((option) => (
            <Grid
              key={option.title}
              size={{
                xs: 6,
                md: 4,
              }}
              bgcolor={isDarkMode ? 'background.paper' : 'background.default'}
              border={1}
              borderColor={'background.border'}
              py={3}
              px={2}
              borderRadius={2}
              height={257}
            >
              <Typography
                variant="h6"
                fontSize={{
                  xs: 16,
                  sm: 22,
                }}
                fontWeight={500}
                sx={{ color: 'text.title' }}
              >
                {option.title}
              </Typography>
              <Stack direction={'column'} gap={1} mt={2.5}>
                {option.list.map((item) => (
                  <Stack key={item} direction={'row'} gap={0.5} alignItems={'center'}>
                    <DoneIcon fontSize="small" color="primary" />
                    <Typography
                      variant="body2"
                      fontSize={{
                        xs: 12,
                        sm: 16,
                      }}
                      fontWeight={500}
                      sx={{ color: 'text.secondary' }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

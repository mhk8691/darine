'use client';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {  Grid, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CallIcon, ChatIcon, EmailIcon } from '../CustomIcons/CustomIcons';
import LaptopCertificate from './LaptopCertificate';
import LinkContainer from './LinkContainer';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const installment = [
  '/images/simple/snapppayLogo.webp',
  '/images/simple/digipayLogo.webp',
  '/images/simple/azkivamLogo.webp',
  '/images/simple/nasiba.webp',
];
export const certificate = [
  '/images/simple/nezamSenfi.webp',
  '/images/simple/enamadSmall.webp',
  '/images/simple/ecunion.webp',
  '/images/simple/estjt.webp',
  '/images/simple/fintech.webp',
  '/images/simple/khavarmianeQuality.webp',
  '/images/simple/nikecert.webp',
  '/images/simple/tuwWorld.webp',
];


export default function Footer() {
  const pathname = usePathname();
  const isLoginPage = pathname?.startsWith('/login');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  if (isLoginPage) return null;
  return (
    <Stack>
      <Grid
        container
        sx={{
          bgcolor: 'background.default',
          py: 5,
          px: {
            xs: '16px !important',
            md: '24px !important',
            lg: '40px !important',
          },
          bottom: 0,
        }}
      >
        <Grid size={2.5} mb={4}>
          <Stack
            sx={{
              minWidth: '100px',
              minHeight: '100px',
              maxWidth: '130px',
              maxHeight: '130px',
            }}
          >
            <Image
              src={'/images/darineh.png'}
              width={247}
              height={46}
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Stack>
        </Grid>
        <Grid size={12} container>
          <Grid
            size={{
              xs: 12,
              md: 6,
              xl: 6,
            }}
            display={'flex'}
            flexDirection={'column'}
            gap={1}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: 'text.secondary' }}
            >
              دارینه، پلتفرم خرید و فروش آنلاین طلا خام و بدون اجرت، آسان‌ترین و امن‌ترین راه را برای
              حفظ ارزش سرمایه شما ارائه می‌کند.
            </Typography>
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: 'text.secondary' }}
            >
             قم، میدان توحید، پاساژ شهر طلا
            </Typography>
          </Grid>
          <LinkContainer />
          {/* <DesktopCertificate /> */}
        </Grid>
      
      </Grid>
      <Grid
        container
        sx={{
          mt: {
            xs: 0,
            md: 3.5,
          },
        }}
      >
        <Grid
          size={12}
          bgcolor={{
            xs: 'background.default',
            md: isDarkMode ? '#393936' : '#FEF2C0',
          }}
          py={{
            xs: 0,
            md: 2,
          }}
          px={{
            xs: 2,
            md: 4,
          }}
        >
          <Stack
            direction={{
              xs: 'column',
              lg: 'row',
            }}
            gap={{
              xs: 4,
              lg: 0,
            }}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Stack
              direction={{
                xs: 'column',
                md: 'row',
              }}
              alignItems={'center'}
              gap={{
                xs: 3,
                md: 0.5,
              }}
            >
              <Typography variant="body2" color="text.primary" fontSize={12}>
                راه های ارتباطی:
              </Typography>
              <Typography variant="body2" color="text.primary" fontSize={12}>
                24 ساعته و در 7 روز هفته پاسخگوی شما هستیم.
              </Typography>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={{
                xs: '100%',
                md: 'auto',
              }}
              gap={{
                xs: 0,
                md: 3,
              }}
            >
              <Link href={'https://wa.me/989191608771'} target='_blank' rel="noopener noreferrer">
              <Stack
                direction={'row'}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={'center'}
              >
                <WhatsAppIcon />

                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={14}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  پشتیبانی واتساپ
                </Typography>
              </Stack>
                </Link>
                <Link href={'tel:09191608771'}>
              <Stack
                direction={'row'}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={'center'}
              >
                <CallIcon />
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={14}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  ۰۹۱۹۱۶۰۸۷۷۱
                </Typography>
              </Stack>
                </Link>
           
            </Stack>
            <Stack direction={'row'} gap={1.5}>
              <Stack
                sx={{
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  p: 0.75,
                }}
              >
                <InstagramIcon
                  sx={{
                    color: 'background.default',
                    width: '23px',
                    height: '23px',
                  }}
                />
              </Stack>
          
              <Stack
                sx={{
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  p: 0.75,
                }}
                component={Link}
                target='_blank'
                href={'https://t.me/darine_app'}
              >
                <TelegramIcon
                  sx={{
                    color: 'background.default',
                    width: '23px',
                    height: '23px',
                  }}
                />
              </Stack>
          
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {/* <LaptopCertificate /> */}
      <Stack
        p={2}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
       
        bgcolor={{
          xs: 'transparent',
          sm: 'background.paper',
        }}
      >
        <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
          ©️ ۱۴۰۵ دارینه | تمامی حقوق محفوظ است.
        </Typography>
      </Stack>
    </Stack>
  );
}

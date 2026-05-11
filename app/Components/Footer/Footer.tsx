'use client';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CallIcon, ChatIcon, EmailIcon } from '../CustomIcons/CustomIcons';
import DesktopCertificate from './DesktopCertificate';
import LaptopCertificate from './LaptopCertificate';
import LinkContainer from './LinkContainer';

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
const links = [
  { title: 'طلای ۱۸ عیار', link: '/' },
  { title: 'طلای ۲۱ عیار', link: '/' },
  { title: 'طلای ۲۴ عیار', link: '/' },
  { title: 'طلای دست دوم', link: '/' },
  { title: 'مثقال طلا', link: '/' },
  { title: 'قیمت طلا آب شده', link: '/' },
  { title: 'سکه امامی', link: '/' },
  { title: 'سکه بهار آزادی', link: '/' },
  { title: 'نیم سکه', link: '/' },
  { title: 'ربع سکه', link: '/' },
  { title: 'سکه گرمی', link: '/' },
  { title: 'محاسبه قیمت طلا دست دوم', link: '/' },
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
              xl: 3,
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
              طلاسی، پلتفرم خرید و فروش آنلاین طلا خام و بدون اجرت، آسان‌ترین و امن‌ترین راه را برای
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
              آدرس: تهران, میدان هروی, بازار طلای هروی سنتر, پلاک B44
            </Typography>
          </Grid>
          <LinkContainer />
          <DesktopCertificate />
        </Grid>
        <Grid
          size={12}
          mt={7}
          display={{
            xs: 'none',
            md: 'flex',
          }}
        >
          <Stack direction={'column'} gap={4}>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={14}
              sx={{ color: 'text.secondary' }}
            >
              لینک های مفید
            </Typography>
            <Stack direction="row" alignItems="center">
              {links.map((item, index) => (
                <React.Fragment key={item.title}>
                  <Link href={item.link}>
                    <Typography
                      variant="body1"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.title}
                    </Typography>
                  </Link>

                  {index !== links.length - 1 && (
                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
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
            md: 4,
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
            justifyContent={'space-between'}
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
              <Stack
                direction={'row'}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={'center'}
              >
                <ChatIcon />

                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  پشتیبانی چت آنلاین
                </Typography>
              </Stack>
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
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  02191345910
                </Typography>
              </Stack>
              <Stack
                direction={'row'}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={'center'}
              >
                <EmailIcon />
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  support@talasea.ir
                </Typography>
              </Stack>
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
              >
                <TwitterIcon
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
              >
                <TelegramIcon
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
              >
                <LinkedInIcon
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
      <LaptopCertificate />
      <Stack
        p={2}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        mt={5}
        display={{
          md: 'none',
        }}
        bgcolor={{
          xs: 'transparent',
          sm: 'background.paper',
        }}
      >
        <Typography variant="body2" fontSize={10} sx={{ color: 'text.muted' }}>
          Copyright © 2026 Talasea | شرکت توسعه راهکار الوند ارسباران | version: 3.0.3
        </Typography>
      </Stack>
    </Stack>
  );
}

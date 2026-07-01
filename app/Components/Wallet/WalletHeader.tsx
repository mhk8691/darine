'use client';
import priceFormater from '@/app/core/PriceFormater';
import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Card from '../Containers/Container/Container';
import MobileWalletStatus from './MobileWalletStatus';
import { useAssets } from '@/app/AssetsProvider';
import { usePathname } from 'next/navigation';

export default function WalletHeader() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const {assets,isVisible} = useAssets()
    const pathname = usePathname()
  return (
    <>
      {isDesktop ? (
        <Grid
          container
          spacing={{
            xs: 1,
            md: 3,
          }}
          mb={4}
        >
          <Grid size={4}>
            <Card
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                py: '27px',
                px:{
                  xs:0,
                  md:3
                }
              }}
            >
              <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                موجودی طلا
              </Typography>
              <Stack direction={'row'} gap={0.5} alignItems={'center'} justifyContent={'center'}>
                <Typography
                  variant="body1"
                  fontSize={{xs:16,md:20}}
                  fontWeight={500}
                  sx={{ color: 'text.title' }}
                >
                  {isVisible ? priceFormater(assets?.gold_balance) : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs:14,
                    md:18
                  }}
                  fontWeight={500}
                  sx={{ color: 'text.title' }}
                >
                  گرم
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                py: '27px',
                px:{
                  xs:0,
                  md:3
                }
              }}
            >
              <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                موجودی تومان
              </Typography>
              <Stack direction={'row'} gap={0.5} alignItems={'center'} fontWeight={500} justifyContent={'center'}>
                <Typography variant="body1" fontSize={{xs:16,md:20}} sx={{ color: 'text.title' }}>
                  {isVisible ? priceFormater(assets?.wallet_balance) : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs:14,
                    md:18
                  }}
                  fontWeight={500}
                  sx={{ color: 'text.title' }}
                >
                  تومان
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                py: '27px',
                px:{
                  xs:0,
                  md:3
                }
              }}
            >
              {/* <Stack
                display={{
                  xs: 'none',
                  md: 'flex',
                }}
              >
                <CircleAnimation type="red" />
              </Stack> */}
              <Stack direction={'column'} gap={0.5} justifyContent={'center'} >
                <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                  قیمت فعلی طلا ۱۸ عیار
                </Typography>
                <Stack direction={'row'} gap={0.5} alignItems={'center'} justifyContent={'center'}  >
                  <Typography
                    variant="body1"
                    fontSize={{xs:16,md:20}}
                    sx={{ color: 'text.title' }}
                    fontWeight={500}
                  >
                    {priceFormater(assets?.gold_price)}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs:14,
                      md:18
                    }}
                    sx={{ color: 'text.title' }}
                    fontWeight={500}
                  >
                    تومان
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      ) : (
        pathname !== '/dashboard' && 
        <Stack mb={2}>
        <MobileWalletStatus isDesktop={isDesktop} visible={isVisible} assets={assets} />
          </Stack>
        
      )}
    </>
  );
}

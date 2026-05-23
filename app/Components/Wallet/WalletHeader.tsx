'use client';
import priceFormater from '@/app/core/PriceFormater';
import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '../Containers/Container/Container';
import MobileWalletStatus from './MobileWalletStatus';
import { useAssets } from '@/app/dashboard/AssetsProvider';

export default function WalletHeader() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const {assets} = useAssets()
  useEffect(() => {
    const stored = localStorage.getItem('eyeState');
    if (stored !== null) {
      setVisible(stored === 'true');
    }
  }, []);
  return (
    <>
      {isDesktop ? (
        <Grid
          container
          spacing={{
            xs: 1,
            md: 3,
          }}
          mb={{
            xs: 0,
            sm: 2,
            lg: 0,
          }}
        >
          <Grid size={4}>
            <Card
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                py: '27px',
              }}
            >
              <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                موجودی طلا
              </Typography>
              <Stack direction={'row'} gap={0.5} alignItems={'center'}>
                <Typography
                  variant="body1"
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: 'text.title' }}
                >
                  {visible ? assets.gold_balance_gr : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={18}
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
              }}
            >
              <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                موجودی تومان
              </Typography>
              <Stack direction={'row'} gap={0.5} alignItems={'center'} fontWeight={500}>
                <Typography variant="body1" fontSize={20} sx={{ color: 'text.title' }}>
                  {visible ? priceFormater(assets.toman_balance) : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={18}
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
              <Stack direction={'column'} gap={0.5} justifyContent={'center'}>
                <Typography variant="body1" fontSize={14} sx={{ color: 'text.muted' }}>
                  قیمت فعلی طلا ۱۸ عیار
                </Typography>
                <Stack direction={'row'} gap={0.5} alignItems={'center'}>
                  <Typography
                    variant="body1"
                    fontSize={20}
                    sx={{ color: 'text.title' }}
                    fontWeight={500}
                  >
                    {priceFormater(assets.current_gold_price)}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={18}
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
        <MobileWalletStatus isDesktop={isDesktop} visible={visible} assets={assets} />
      )}
    </>
  );
}

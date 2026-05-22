'use client';
import Container from '@/app/Components/Containers/Container/Container';
import { CartIcon, WarrantyIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import priceFormater from '@/app/core/PriceFormater';
import { AssetsDataType, ProductDateType } from '@/app/core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';
import { Button, Divider, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Cart({data}:{data:ProductDateType[]}) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [visible, setVisible] = useState(false);
  const router = useRouter();
    const [assets, setAssets] = useState<AssetsDataType>({} as AssetsDataType);
      useEffect(() => {
        const getData = async () => {
          try{
    const response = await getAssets();
            setAssets(response);
          }catch(error:unknown){
            if (isAxiosError(error)){
              showSnackbar(error.response?.data.message)
            }
          }
        };
        getData();
            const interval = setInterval(() => {
          getData();
        }, 45 * 1000);
    
        return () => clearInterval(interval);
      }, []);
       useEffect(() => {
    const stored = localStorage.getItem('eyeState');
    if (stored !== null) {
      setVisible(stored === 'true');
    }
  }, []);
  return (
    <>
      {isMd && (
        <Grid size={4}>
          <Container style={{ px: 0 }}>
            <Stack direction={'row'} gap={1} alignItems={'flex-start'} px={1.5}>
              <Stack sx={{ mt: 0.3 }}>
                <WarrantyIcon />
              </Stack>
              <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                همه محصولات دارای ضمانت اصالت و سلامت کالا می‌باشند.
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2 }} />
            <Stack direction={'column'} gap={2} mt={1} px={1.5}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  موجودی طلای شما
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {visible ? `${assets.gold_balance_gr} گرم` :'***'}
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  موجودی تومان شما
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {visible ? `${priceFormater(assets.current_gold_price)} تومان` :'***'}
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  تعداد محصول
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  ۱
                </Typography>
              </Stack>
            </Stack>
            <Stack px={1.5}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: 16,
                  py: 1.5,
                  fontWeight: '600',
                  borderRadius: 2,
                  mt: 2,
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
                onClick={() => router.push('/gold-shop-basket')}
                disableRipple
                startIcon={<CartIcon />}
              >
                مشاهده سبد خرید
              </Button>
            </Stack>
          </Container>
        </Grid>
      )}
    </>
  );
}

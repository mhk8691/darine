'use client';
import Container from '@/app/Components/Containers/Container/Container';
import { CartIcon, WarrantyIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { Button, Divider, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const router = useRouter();
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
                  ***
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  موجودی تومان شما
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  ***
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

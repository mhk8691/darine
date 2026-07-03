import Container from '@/app/Components/Containers/Container/Container'
import { Box, Grid, Stack, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface Props{
    hintIndex:number
}

export default function TransactionHint({hintIndex}:Props) {
  return (
    <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Container
          style={{
            color: '#EF8011',
            px: {
              xs: 2,
              sm: 4,
            },
            py: {
              xs: 2,
              sm: 3,
            },
             '& .MuiTypography-root': {
      textAlign: 'justify',
    },
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          {hintIndex === 0 ? (
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: 'text.secondary', mt: '10px' }}
            >
              واریز ریالی فقط از حساب بانکی به نام خودتان امکان‌پذیر است. در غیر این صورت، مبلغ در
              حالت انتظار قرار می‌گیرد و پس از پیگیری شما، طی ۳ روز کاری به حساب شما باز می‌گردد.
            </Typography>
          ) : hintIndex === 1? (
           <>
            <Typography variant="body1" color='textPrimary' mt={2}>
              به‌منظور واریز مستقیم از طریق شماره شبا، لطفاً به نکات زیر دقت فرمایید:
            </Typography>
             <Box component={'ul'} px={3}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
شارژ حساب فقط از طریق پایا انجام می‌شود و تا حداکثر یک روز کاری ممکن است زمانبر باشد.

              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
واریز باید با کارتی انجام شود که قبلاً در پنل ثبت کرده‌اید.
              </Typography>
             
     <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
سقف واریز بسته به محدودیت‌های بانک است؛ دارینه محدودیتی ندارد.

              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
پس از واریز وجه، حساب شما به‌صورت خودکار شارژ می‌شود. در صورت اختلال بانکی، دارینه مسئولیتی در قبال تأخیر ندارد.


              </Typography>
                <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
واریز با کارت هدیه، کارت خرید، بن‌کارت یا کارت‌های فاقد شماره شبا ممنوع است.



              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
برای راهنمایی بیشتر، پشتیبانی دارینه در کنار شماست.





              </Typography>
          </Box>
           </>
          ):hintIndex === 2 ?
          <Box component={'ul'} px={3}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
               تسویه برداشت‌های موفق به دلیل فرایندهای تسویه بین بانکی حداکثر تا 2 روز کاری است.

              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
                برداشت ریالی فقط به کارت‌های ثبت شده امکان‌پذیر است.
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
               سقف برداشت روزانه 200,000,000 تومان

              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                sx={{ color: 'text.secondary', mt: '5px' }}
              >
              سیکل اول ساعت 15

              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                sx={{ color: 'text.secondary', mt: '5px' }}
              >
              سیکل اول ساعت 20

              </Typography>
          </Box>
             :
              <>
            <Typography variant="body1" color='textPrimary' mt={2}>
             در برداشت تومانی به نقره‌سی، مبلغ موردنظر از موجودی تومانی شما کسر و به حساب کاربری نقرینه تان منتقل می‌شود. این انتقال بدون کارمزد انجام می‌شود. لطفاً به موارد زیر توجه داشته باشید:
            </Typography>
             <Box component={'ul'} px={3}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
حداقل مبلغ قابل انتقال ۵۰ هزار تومان است.

              </Typography>
               <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
حداکثر مبلغ قابل انتقال روزانه 100 میلیون تومان است.
              </Typography>
             
     <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
در هر ۲۴ ساعت، حداکثر ۵ انتقال می‌توانید انجام دهید.

              </Typography>
             
          </Box>
           </>
             }
        </Container>
      </Grid>
  )
}

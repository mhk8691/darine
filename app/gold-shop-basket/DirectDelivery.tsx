import { Stack, Typography } from '@mui/material';



export default function DirectDelivery(
) {
  return (
   <Stack direction="column" gap={2} mt={3}>
  <Stack direction="row" spacing={1}>
    <Typography fontWeight={700}>آدرس تحویل:</Typography>
    <Typography>
     قم، میدان توحید، پاساژ شهر طلا، طبقه اول، پلاک ۲۳
    </Typography>
  </Stack>

  <Stack direction="row" spacing={1}>
    <Typography fontWeight={700}>تاریخ و ساعت تحویل:</Typography>
    <Typography>
      از شنبه تا پنجشنبه ساعت ۱۱ تا ۲۰
    </Typography>
  </Stack>
</Stack>
  );
}
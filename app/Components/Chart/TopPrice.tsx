import { Box, Stack, Typography } from '@mui/material';
import priceFormater from '../../core/PriceFormater';
import CircleAnimation from '../CircleAnimation/CircleAnimation';
import { ChartGoldDataType } from '@/app/core/Types';

export default function TopPrice({chartData}:{chartData:ChartGoldDataType}) {
  return (
    <Stack direction={'row'} alignItems={'center'} mt={1} gap={2}>
      <CircleAnimation type={chartData.stats.change_percent >=0 ? 'green':'red'} />
      <Stack direction={'row'} alignItems={'center'} gap={0.5}>
        <Typography
          variant="body2"
          fontSize={{
            xs: 10,
            sm: 12,
          }}
          sx={{ color: 'text.muted' }}
        >
          قیمت الان:
        </Typography>
       
        <Stack direction={'row'} alignItems={'center'} gap={.5}>
           <Typography
          variant="h6"
          fontSize={{
            xs: 20,
            sm: 22,
          }}
          sx={{
            flexDirection: 'row',
          }}
        >
          {priceFormater(chartData.stats.current_price)}
        </Typography>
        <Typography variant="body2" >
          تومان
        </Typography>
        </Stack>
        
        <Typography variant="body1" sx={{ mr: 0.5 }} color={chartData.stats.change_percent >= 0 ?'success':'error'} fontSize={{ xs: 10, sm: 16 }}>
          {new Intl.NumberFormat('fa-IR').format(chartData.stats.change_percent)} -%
        </Typography>
      </Stack>
    </Stack>
  );
}

import { Box, Divider, Stack, SxProps, Typography } from '@mui/material';
import priceFormater from '../../core/PriceFormater';
import { ChartGoldDataType } from '@/app/core/Types';

export default function BottomPrice({
  priceStyle,
  dividerStyle,
  chartData,
  select
}: {
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
  chartData:ChartGoldDataType
  select:string
}) {
  return (
    <>
      <Divider sx={dividerStyle} />

      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={1.5}
        mb={1}
        sx={priceStyle}
      >
        <Stack direction={'column'} alignItems={'center'} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: 'text.muted' }}
          >
            بالاترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.primary' }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(chartData.stats.highest_price)}
            <Box
              component={'span'}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
              ml={0.5}
            >
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={'column'} alignItems={'center'} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: 'text.muted' }}
          >
            پایین‌ترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.primary' }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(chartData.stats.lowest_price)}
            <Box
              component={'span'}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
              ml={0.5}
            >
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={'column'} alignItems={'center'} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: 'text.muted' }}
          >
            تغییرات قیمت
          </Typography>
          <Typography
            variant="body1"
            color={chartData.stats.change_percent >= 0 ?'success':'error'}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {new Intl.NumberFormat('fa-IR').format(select === '24TH' ? chartData.stats.daily_change_percent :select === 'WEEK'?chartData.stats.weekly_change_percent:chartData.stats.monthly_change_percent)}
            <Box
              component={'span'}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
            >
              درصد
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

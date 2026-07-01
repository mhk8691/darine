import priceFormater from '@/app/core/PriceFormater';
import { PricesDataType } from '@/app/core/Types';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import LineChart from '../../LineChart/LineChart';

interface Props {
  items: PricesDataType[];
  isDetail?: boolean;
}
export default function LaptopTable({ items, isDetail = true }: Props) {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid
          size={12}
          key={item.type}
          direction={'column'}
          border={1}
          borderRadius={2}
          mb={1}
          borderColor={'background.paper'}
        >
          <>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              bgcolor={'background.paper'}
              px={1.5}
              py={1}
              sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            >
              <Typography variant="body1" fontSize={12} fontWeight={'bold'}>
                {item.type}
              </Typography>
              {isDetail && (
                // <Link href={'/'}>
                //  #0091F8
                // </Link>
                 <Typography variant="body2" fontSize={10} sx={{ color: 'gray' }}>
                    مشاهده جزئیات
                  </Typography>
              )}
            </Stack>
          </>
          <Stack p={1.5} pt={0}>
            <>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={'bold'}
                  sx={{ color: 'text.subtitle' }}
                >
                  نرخ فعلی:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.currentRate)}{' '}
                  <Box component={'span'} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={'bold'}
                  sx={{ color: 'text.subtitle' }}
                >
                  پایین ترین قیمت روز:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.minPriceDay)}{' '}
                  <Box component={'span'} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={'bold'}
                  sx={{ color: 'text.subtitle' }}
                >
                  بالاترین قیمت روز:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.maxPriceDay)}{' '}
                  <Box component={'span'} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={'bold'}
                  sx={{ color: 'text.subtitle' }}
                >
تغییر روزانه:
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{
                    color: item.dayChange >= 0 ? 'success.main' : 'error.main',
                  }}
                >
                  {priceFormater(item.dayChange)} تومان
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={'bold'}
                  sx={{ color: 'text.subtitle' }}
                >
                  درصد تغییرات:
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{
                    color: item.percentChange >= 0 ? 'success.main' : 'error.main',
                  }}
                >
                  {item.percentChange}%
                </Typography>
              </Stack>
            </>
      
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

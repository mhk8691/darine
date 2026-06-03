'use client';
import priceFormater from '@/app/core/PriceFormater';
import { PricesDataType } from '@/app/core/Types';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
interface Props {
  items: PricesDataType[];
}
export default function MobileTable({ items }: Props) {
  const theme = useTheme();
  const isMoblie = useMediaQuery(theme.breakpoints.down('sm'));
  if (!isMoblie) return null;
  return (
    <Stack direction={'column'} borderRadius={2} my={2} border={1} borderColor={'background.paper'}>
      {items.map((item, index) => (
        <Stack
          key={item.type}
          direction={'row'}
          justifyContent={'space-between'}
          p={1.5}
          bgcolor={index % 2 === 0 ? 'background.paper' : 'background.default'}
          sx={{
            borderTopLeftRadius: index === 0 ? '8px' : '0px',
            borderTopRightRadius: index === 0 ? '8px' : '0px',
            borderBottomLeftRadius: index === items.length - 1 ? '8px' : '0px',
            borderBottomRightRadius: index === items.length - 1 ? '8px' : '0px',
          }}
        >
          <Typography variant="body1" fontSize={12}>
            {item.type}
          </Typography>
          <Link href={`#`}>
            <Stack direction={'row'} alignItems={'center'}>
              <Typography variant="body2" fontSize={12}>
                {priceFormater(item.currentRate)}{' '}
                <Box component={'span'} fontSize={10}>
                  تومان
                </Box>
              </Typography>
              <KeyboardArrowLeft fontSize="small" />
            </Stack>
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}

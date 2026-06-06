'use client';
import { useAssets } from '@/app/AssetsProvider';
import priceFormater from '@/app/core/PriceFormater';
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function StatusHeader() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
    const isLaptop = useMediaQuery(theme.breakpoints.down('md'));
  const {assets} = useAssets()
  return (
  <>
    {
      isLaptop && <Stack
      direction={'row'}
      justifyContent={'space-between'}
      bgcolor={isDarkMode ? '#393936' : '#FEF2C0'}
      p={1}
      >
 
        <Typography
          variant="body1"
          sx={{ color: 'text.title' }}
          fontSize={{
            xs: 10,
            lg: 14,
            xl: 16,
          }}
        >
          قیمت لحظه ای طلا ۱۸ عیار(گرمی):
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            lg: 14,
            xl: 16,
          }}
        >
          {priceFormater(assets.current_gold_price)} تومان
        
        </Typography>
     
    </Stack>
    }
    <Box pb={{
      xs:3,
      sm:0
    }}></Box>
  </>
    
  );
}

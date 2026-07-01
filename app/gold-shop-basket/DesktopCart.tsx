'use client';
import {
  Box,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import {  CartItem } from '../core/Types';
import priceFormater from '../core/PriceFormater';
import Counter from '../gold-shop/[productId]/Counter';
const dataStyle: SxProps = {
  py: 1.5,
  fontSize: {
    xs: 14,
    md: '16px',
  },
  color: 'text.primary',
};
const headStyle: SxProps = {
  color: 'text.subtitle',
  borderBottom: 'none',
  fontSize: '16px',
};


interface Props{
  cartData:CartItem[]
  setCartData:Dispatch<SetStateAction<CartItem[]>>
}
const DesktopCart = ({cartData,setCartData}:Props) => {
  const theme =useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  return (
    <Box dir="rtl">
      <Table
        sx={{
          borderCollapse: 'separate',
          borderSpacing: '0 16px',
          tableLayout: 'fixed',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                width: {
                  xs: '30%',
                  md: '35%',
                },
                ...headStyle,
              }}
            >
              محصول
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: '10%',
                  md: '15%',
                },
                ...headStyle,
              }}
            >
             وزن خالص
            </TableCell>
<TableCell
              align="center"
              sx={{
                width: {
                  xs: '10%',
                  md: '15%',
                },
                ...headStyle,
              }}
            >
            مبلغ وزنی
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: {
                  xs: '15%',
                  md: '20%',
                },
                ...headStyle,
              }}
            >
              ارزش کل محصول
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: '15%',
                },
                ...headStyle,
              }}
            >
              تعداد
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: '20%',
                  md: '15%',
                },
                ...headStyle,
              }}
            >
              مبلغ کل
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartData?.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                background: 'transparent',
                boxShadow: `0 0 0 1px ${isDarkMode ? '#494949':'#D4D4D2'}`,
                borderRadius: '10px',
                overflow: 'hidden',
                '& td': {
                  borderBottom: 'none',
                  color: 'text.title',
                },
                '& td:first-of-type': {
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                },
                '& td:last-of-type': {
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                },
              }}
            >
              <TableCell align="center" sx={{ ...dataStyle }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Stack
                    width={{
                      xs: 80,
                      md: 112,
                    }}
                    height={{
                      xs: 80,
                      md: 112,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius:8
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {priceFormater(item.weight)} گرم
              </TableCell>
                    <TableCell align="center" sx={dataStyle}>
                {priceFormater(item.product_weight_with_fee)} گرم
              </TableCell>
              <TableCell align="center" sx={dataStyle}>
                {priceFormater(item.total_price)} تومان
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
               <Counter cart={cartData} productId={item.id} setCart={setCartData} style={{
                minWidth:'100px',
                maxWidth:'120px'
               }} />
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {priceFormater(item.total_price * item.quantity)} تومان
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DesktopCart;

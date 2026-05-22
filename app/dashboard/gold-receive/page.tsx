'use client'
import Container from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { AssetsDataType, CartDataType, ProductDateType, RecentDeliveriesDataType, ToggleItemsType } from '@/app/core/Types';
import { Grid, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import Cart from './Cart';
import Products from './Products';
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import priceFormater from '@/app/core/PriceFormater';
import { formatDate } from '@/app/core/FormatDate';
import { getRecentDelivery } from '@/lib/delivery/delivery';
import { getAssets } from '@/lib/getAssets/getAssets';
import { getCart } from '@/lib/cart/cart';

const items: ToggleItemsType[] = [
  {
    title: 'تحویل درب منزل',
    value: 'doorstepdelivery',
    id: 1,
    emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
  },
  {
    title: 'تحویل حضوری',
    value: 'personDelivery',
    id: 2,
    emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
  },
];

export default function page() {
  const [deliveryData,setDeliveryData] = useState<RecentDeliveriesDataType[]>([])
  const [cartData,setCartData] = useState<CartDataType>({} as CartDataType)
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await getCart()
        setCartData(response)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    }
getData()
  },[])
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await getRecentDelivery()
        setDeliveryData(response)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    }
    getData()
  },[])
  return (
    <Grid
      container
      spacing={{
        xs: 1,
        sm: 3,
      }}
    >
      <Grid size={12}>
        <WalletHeader />
      </Grid>
           <Container
        style={{
          pb: 11,
          width: "100%",
          px: {
            xs: 0,
            sm: 4,
          },
          border: {
            xs: 0,
            sm: 1,
          },
          borderColor: {
            sm: "background.paper",
          },
        }}
      >
        <Grid container spacing={1} size={12}>
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
            container
            spacing={{
              xs: 1,
              md: 2,
            }}
          >
           <Products/>
          </Grid>
          <Cart data={cartData} />
        </Grid>
      </Container>
      <Grid size={12}>
        <OrderDetail
          type="chip"
          title="لیست تحویل‌های اخیر"
          toggleItems={items}
          tableBody={   <TableBody>
            {deliveryData?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{
                  '&:last-child td': {
                    border: 0,
                  },
                  '&:last-child th': { border: 0 },
                }}
              >
                 <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{priceFormater(row.amount)}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      تومان
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row.type_display}</Typography>
                  </Stack>
                </TableCell>
               
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography
                      variant="body1"
                    
                    >
                        {row.method_display}
                    </Typography>
                  </Stack>
                </TableCell>
                  <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography
                      variant="body1"
                    
                    >
                        {row.status_display}
                    </Typography>
                  </Stack>
                </TableCell>
                 <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography
                      variant="body1"
                    
                    >
                        {row.receipt_image}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography
                      variant="body1"
                    
                    >
                        {row.user_card_number}
                    </Typography>
                  </Stack>
                </TableCell>
                  <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  {row.tracking_code}
                </TableCell>
                  <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  {formatDate(row.created_at)}
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>}
          tableHead={['test']}
          listLength={deliveryData.length}
        />
      </Grid>
    </Grid>
  );
}

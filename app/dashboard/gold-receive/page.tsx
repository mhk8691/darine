'use client'
import Container from '@/app/Components/Containers/Container/Container';
import GoldCard from '@/app/Components/ProductCard/ProductCard';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { ProductDateType, ToggleItemsType } from '@/app/core/Types';
import { Grid } from '@mui/material';
import Cart from './Cart';
import Sort from './Sort';
import { Metadata } from 'next';
import { getProducts } from '@/lib/getProducts/getProducts';
import { useEffect, useState } from 'react';


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

export default  function page() {
  const [productData,setProductData] = useState<ProductDateType[]>([] )
 
  useEffect(()=>{
    const getData = async ()=>{
 const response = await getProducts()
 setProductData(response || [])
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
          width: '100%',
          px: {
            xs: 0,
            sm: 4,
          },
          border: {
            xs: 0,
            sm: 1,
          },
          borderColor: {
            sm: 'background.paper',
          },
        }}
      >
        <Sort />
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
            {
              productData?.map((item)=>(
<Grid
              size={{
                xs: 6,
                md: 4,
              }}
              key={item.id}
            >
              <GoldCard item={item} />
            </Grid>
              ))
            }
            
         
          </Grid>
          <Cart />
        </Grid>
      </Container>
      <Grid size={12}>
        <OrderDetail type="chip" title="لیست تحویل‌های اخیر" toggleItems={items} />
      </Grid>
    </Grid>
  );
}

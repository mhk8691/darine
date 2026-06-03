'use client'
import Container from "@/app/Components/Containers/Container/Container";
import ProductCard from "@/app/Components/ProductCard/ProductCard"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import {  OrdersDataType, ProductDateType } from "@/app/core/Types";
import { getProducts } from "@/lib/getProducts/getProducts";
import { Grid } from "@mui/material"
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { getCart } from "@/lib/cart/cart";
import Filter from "./Filter";
import OrdersTable from "../reports/OrdersTable";
import { DatePickerValue } from "@/app/Components/DatePicker/CustomDatePicker";
import { getReports } from "@/lib/getReports/getReports";


export default function Products() {
  const [filter,setFilter] = useState('')
      const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  const [orderParams,setOrderParams] = useState('')
  const [productParams,setProductParams] = useState('')
  const [productData, setProductData] = useState<ProductDateType[]>([] as ProductDateType[]);
  const [deliveryData,setDeliveryData] = useState<OrdersDataType[]>([])
    const [cart,setCart] = useState(getCart())
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await getProducts(productParams);
      setProductData(response);
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    };
    getData();
  }, [productParams]);
  useEffect(()=>{
  const getData = async () => {
      try{
  const response = await getReports('orders',orderParams,dateRange,filter);
      setDeliveryData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
    getData();
  },[filter,dateRange,orderParams])
  return (
     <>
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
        <Grid size={12}>
          <Filter cart={cart}
setProductParams={setProductParams} />
        </Grid>
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
                {productData?.map((item) => (
    <Grid
      size={{
        xs: 6,
        md: 4,
      }}
      key={item.id}
    >
      <ProductCard 
      cart={cart}
setCart={setCart}
        item={item} 
      />
    </Grid>
))}
          </Grid>
          <Cart cart={cart} />
        </Grid>
      </Container>
 <Grid size={12}>
       <OrdersTable type="chip" data={deliveryData} noCard={false} dateRange={dateRange} filter={filter} setDateRange={setDateRange} setFilter={setFilter} setOrdersParams={setOrderParams} />
      </Grid>
     </>

  )
}

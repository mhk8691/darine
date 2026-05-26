'use client'
import Container from "@/app/Components/Containers/Container/Container";
import ProductCard from "@/app/Components/ProductCard/ProductCard"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import {  ProductDateType } from "@/app/core/Types";
import { getProducts } from "@/lib/getProducts/getProducts";
import { Grid } from "@mui/material"
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { getCart } from "@/lib/cart/cart";

export default function Products() {
  const [productData, setProductData] = useState<ProductDateType[]>([] as ProductDateType[]);
    const [cart,setCart] = useState(getCart())
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await getProducts();
      setProductData(response);
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    };
    getData();
  }, []);
  return (
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
 

  )
}

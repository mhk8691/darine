'use client'
import ProductCard from "@/app/Components/ProductCard/ProductCard"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { CartDataType, ProductDateType } from "@/app/core/Types";
import { getProducts } from "@/lib/getProducts/getProducts";
import { Grid } from "@mui/material"
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export default function Products({cartData,getCartData}:{cartData: CartDataType,getCartData:() => Promise<void>}) {
  const [productData, setProductData] = useState<ProductDateType[]>([] as ProductDateType[]);

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
    <>
      {productData?.map((item) => {
  const cartItem = cartData?.items?.find((cart) => cart.product === item.id);

  return (
    <Grid
      size={{
        xs: 6,
        md: 4,
      }}
      key={item.id}
    >
      <ProductCard 
        item={item} 
        getCartData={getCartData}
        cartProductId={cartItem?.id || 0} 
        quantity={cartItem?.quantity || 0} 
      />
    </Grid>
  );
})}

    </>
  )
}

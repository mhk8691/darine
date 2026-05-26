'use client'
import ProductCard from "@/app/Components/ProductCard/ProductCard"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import {  ProductDateType } from "@/app/core/Types";
import { getProducts } from "@/lib/getProducts/getProducts";
import { Grid } from "@mui/material"
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export default function Products() {
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
      {productData?.map((item) => (
    <Grid
      size={{
        xs: 6,
        md: 4,
      }}
      key={item.id}
    >
      <ProductCard 
        item={item} 
      />
    </Grid>
))}

    </>
  )
}

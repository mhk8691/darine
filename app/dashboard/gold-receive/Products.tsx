'use client'
import ProductCard from "@/app/Components/ProductCard/ProductCard"
import { ProductDateType } from "@/app/core/Types";
import { getProducts } from "@/lib/getProducts/getProducts";
import { Grid } from "@mui/material"
import { useEffect, useState } from "react";

export default function Products() {
      const [productData, setProductData] = useState<ProductDateType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProducts();
      setProductData(response || []);
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
                <ProductCard item={item} />
              </Grid>
            ))}
    </>
  )
}

'use client';

import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { EditCart, removeProduct } from '@/lib/cart/cart';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import {  useState } from 'react';

interface Props {
  getCartData: () => Promise<void>
  quantity:number
  productId:number
}

export default function Counter({ quantity,productId,getCartData}: Props) {
  const [count,setCount] = useState(quantity)
    const handleRemoveProduct = async () =>{
    try{
     const response = await removeProduct(productId)
     getCartData()
     showSnackbar(response.message,true)
   }catch(error:unknown){
    if (isAxiosError(error)){
      showSnackbar(error.response?.data.message)
    }
  }}
  const handleChangeCount = async (quantity:number)=>{
    try{
      const response = await EditCart(quantity,productId)
      getCartData()
      showSnackbar(response.message,true)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
  }
const handleAdd = () => {
  const nextCount = count + 1;
  setCount(nextCount);
  handleChangeCount(nextCount); 
};

const handleRemove = () => {
  if (count === 1) {
    handleRemoveProduct();
  } else {
    const nextCount = count - 1;
    setCount(nextCount);
    handleChangeCount(nextCount);
  }
};


  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: '1px solid #333333',
        borderRadius: 2,
        width: '120px',
      }}
    >
      <IconButton onClick={handleAdd}  >
        <AddIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>

      <Typography fontWeight={600}>{count}</Typography>

      <IconButton onClick={handleRemove}  >
        {count <= 1 ? (
          <DeleteIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        ) : (
          <RemoveIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        )}
      </IconButton>
    </Stack>
  );
}

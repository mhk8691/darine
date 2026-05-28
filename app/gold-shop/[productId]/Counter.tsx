'use client';

import { CartItem } from '@/app/core/Types';
import {  decreaseQuantity, increaseQuantity, removeFromCart } from '@/lib/cart/cart';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Stack, SxProps, Typography } from '@mui/material';
import {  Dispatch, SetStateAction } from 'react';


export default function Counter({style,setCart,cart,productId}:{style?:SxProps, productId:number,setCart:Dispatch<SetStateAction<CartItem[]>>,cart:CartItem[]}) {
  
const getQuantity = cart.find((item) => item.id == productId)?.quantity

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: '1px solid #333333',
        borderRadius: 2,
        py:.5,
        ...style
      }}
    >
      <IconButton onClick={()=>setCart(increaseQuantity(productId))}  >
        <AddIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>

      <Typography fontWeight={600}>{getQuantity}</Typography>

      <IconButton onClick={()=>{
        if (getQuantity === 1){
          setCart(removeFromCart(productId))
        }
        else{
          setCart(decreaseQuantity(productId))
        }
      }}  >
        {getQuantity && getQuantity <= 1 ? (
          <DeleteIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        ) : (
          <RemoveIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        )}
      </IconButton>
    </Stack>
  );
}

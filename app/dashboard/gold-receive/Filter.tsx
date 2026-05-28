'use client';
import { CartIcon } from '@/app/Components/CustomIcons/CustomIcons';
import FilterButton from '@/app/Components/Tables/DetailTable/FilterButton';
import { CartItem, ToggleItemsType } from '@/app/core/Types';
import { Badge, BadgeProps, IconButton, Stack, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState } from 'react';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const toggleItems:ToggleItemsType[] =[
  {id:1,title:'18 عیار',value:'18'},
  {id:2,title:'24 عیار',value:'24'},
  {id:3,title:'پارسیان',value:'parsian'},

] 
interface Props{
  cart:CartItem[]
  setProductParams: Dispatch<SetStateAction<string>>
}
export default function Filter({cart,setProductParams}:Props) {
  const [active, setActive] = useState(toggleItems[0].value);
  
  const router = useRouter();
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
      <Stack direction={'row'} gap={1.5}>
        {
          toggleItems.map((item)=>(
  <FilterButton
          key={item.id}
          active={active}
          setActive={setActive}
          item={item}
          setParams={setProductParams}
        />
          ))
        }
      
      
      </Stack>
      <IconButton onClick={() => router.push('/gold-shop-basket')}>
        <StyledBadge badgeContent={totalQuantity} color="error">
          <CartIcon />
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}

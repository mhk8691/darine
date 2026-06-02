'use client';
import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import AddAddress from './AddAddress';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Snackbar/Snackbar';
import { getAddresses } from '@/lib/giftCard/giftCard';
import { AddressesDataType } from '@/app/core/Types';
import AddressList from './AddressList';
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  description: string;
  cardStyle?: SxProps;
setAddressId:Dispatch<SetStateAction<number>>
addressId:number
setActiveStep?:React.Dispatch<React.SetStateAction<number>>
setAddresses:Dispatch<SetStateAction<AddressesDataType[]>>
addresses:AddressesDataType[]
}
export default function ChooseAddress({addressId,setAddressId,open, setOpen, description, cardStyle,setActiveStep,addresses,setAddresses}: Props) {
  const [address, setAddress] = React.useState('تست');
    const [province, setProvince] = React.useState('');
    const [city, setCity] = React.useState('');
    const [plaque, setPlaque] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [postCode, setPostCode] = React.useState('');
  const getData = async ()=>{
      try{
        const response = await getAddresses()
        setAddresses(response)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    }
  useEffect(()=>{
   
    getData()
  },[])
  return (
    <Stack direction={'column'} alignItems={'center'} gap={2} sx={cardStyle}>
   
     {addresses?.length  > 0  ?  <AddressList setOpenAddAddress={setOpen} addresses={addresses} setAddressId={setAddressId}
addressId={addressId} /> :  <Stack
        component={'div'}
        onClick={() => setOpen(true)}
        sx={{ cursor: 'pointer' }}
        direction={'column'}
        alignItems={'center'}
        gap={2}
      >
        <Image src={'/images/location.svg'} alt="" width={77} height={77} />
        <Typography
          variant="body2"
          fontSize={{
            xs: 12,
            sm: 18,
          }}
          sx={{ color: 'text.secondary' }}
        >
          {description}
        </Typography>
      </Stack>}
      <AddAddress open={open} setOpen={setOpen}   setActiveStep={setActiveStep} getData={getData}             address={address}
setAddress={setAddress}
province={province}
setProvince={setProvince}
city={city}
setCity={setCity}
setPlaque={setPlaque}
setPostCode={setPostCode}
setUnit={setUnit}
plaque={plaque}
postCode={postCode}
unit={unit}
setAddressId={setAddressId}
/>
    </Stack>
  );
}

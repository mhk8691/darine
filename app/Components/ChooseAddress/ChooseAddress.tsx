'use client';
import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
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
  address:string
setAddress:Dispatch<SetStateAction<string>>
province:string
setProvince:Dispatch<SetStateAction<string>>
city:string
setCity:Dispatch<SetStateAction<string>>
setActiveStep:React.Dispatch<React.SetStateAction<number>>
setPlaque:React.Dispatch<React.SetStateAction<string>>
setUnit:React.Dispatch<React.SetStateAction<string>>
setPostCode:React.Dispatch<React.SetStateAction<string>>
plaque:string
unit:string
postCode:string
addresses:AddressesDataType[],
setAddresses:Dispatch<SetStateAction<AddressesDataType[]>>
setAddressId:Dispatch<SetStateAction<number>>
addressId:number
}
export default function ChooseAddress({addressId,setAddressId, addresses,setAddresses,open, setOpen, description, cardStyle,setAddress,address,province,setCity,city,setProvince ,setActiveStep,setPlaque,setPostCode,setUnit,plaque,unit,postCode}: Props) {
  useEffect(()=>{
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
      <AddAddress open={open} setOpen={setOpen}   setActiveStep={setActiveStep}              address={address}
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

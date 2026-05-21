'use client';
import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import AddAddress from './AddAddress';
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
}
export default function ChooseAddress({ open, setOpen, description, cardStyle,setAddress,address,province,setCity,city,setProvince ,setActiveStep}: Props) {
  return (
    <Stack direction={'column'} alignItems={'center'} gap={2} sx={cardStyle}>
      <Stack
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
      </Stack>
      {/* <AddressList setOpenAddAddress={setOpen} /> */}
      <AddAddress open={open} setOpen={setOpen}   setActiveStep={setActiveStep}              address={address}
setAddress={setAddress}
province={province}
setProvince={setProvince}
city={city}
setCity={setCity} />
    </Stack>
  );
}

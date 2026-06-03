import React, { Dispatch, SetStateAction, useState } from 'react';
import ChooseAddress from '../Components/ChooseAddress/ChooseAddress';
import { Typography } from '@mui/material';
import { AddressesDataType } from '../core/Types';


interface Props{
addressId:number
setAddressId:Dispatch<SetStateAction<number>>
}
export default function HouseDelivery({addressId,setAddressId}:Props) {
  const [open, setOpen] = useState(false);

    const [addresses,setAddresses] = React.useState<AddressesDataType[]>([])
  
  return (
    <>
      <Typography
        variant="body1"
        fontSize={16}
        fontWeight={"bold"}
        sx={{ mt: 3 }}
      >
        تاریخ تحویل
      </Typography>
      <Typography variant="body1" fontSize={16}>
        سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
      </Typography> 
     <ChooseAddress
     cardStyle={{mt:3}}
                     open={open}
                     setOpen={setOpen}
                     description=" آدرس مورد نظر خود را اضافه کنید."
     setAddresses={setAddresses}
     addresses={addresses}
     addressId={addressId} 
     setAddressId={setAddressId
     }
                   />
    </>
  );
}

import InputField from '@/app/Components/InputField/InputField';
import { Grid, SxProps } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';

const inputStyle: SxProps = {
  width: '100%',
  '& .MuiInputBase-input': {
    textAlign: 'left',
  },
};
interface Props{
      address:string
  setAddress:Dispatch<SetStateAction<string>>
  setPlaque:React.Dispatch<React.SetStateAction<string>>
setUnit:React.Dispatch<React.SetStateAction<string>>
setPostCode:React.Dispatch<React.SetStateAction<string>>
plaque:string
unit:string
postCode:string
}
export default function NewAddress({address,plaque,postCode,setPlaque,setPostCode,setUnit,unit,setAddress}:Props) {

  return (
    <Grid container spacing={2} width={'100%'}>
      <Grid size={12}>
        <InputField
          placeholder="آدرس محل تحویل"
          value={address}
          setValue={setAddress}
          style={inputStyle}
        />
      </Grid>
      <Grid size={6}>
        <InputField placeholder="پلاک" value={plaque} setValue={setPlaque} style={inputStyle} />
      </Grid>
      <Grid size={6}>
        <InputField placeholder="واحد" value={unit} setValue={setUnit} style={inputStyle} />
      </Grid>
      <Grid size={12}>
        <InputField
          placeholder="کد پستی"
          value={postCode}
          setValue={setPostCode}
          style={inputStyle}
        />
      </Grid>
    </Grid>
  );
}

'use client';
import { Add as AddIcon } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import AddCard from './AddCard';
import BankCard from './BankCard';  
import { BankCardDataType } from '@/app/core/Types';
import { getBankCard } from '@/lib/bankCard/bankCard';
export default function CardContainer() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
    const [bankCardData,setBankCardData] = useState<BankCardDataType[]>([])
    useEffect(()=>{
      const getData = async ()=>{
        const response = await getBankCard()
        setBankCardData(response && response?.length > 0 ? response :[])
      }
      getData()
    },[])
  return (
    <>
         <Grid
            size={12}
            spacing={{
              xs: 2,
              sm: 1.5,
            }}
            container
          >
         
                <BankCard bankCardData={bankCardData} setBankCardData={setBankCardData}
/>
          </Grid>
      <Button
        variant="contained"
        sx={{
          fontSize: 16,
          width: 'fit-content',
          borderRadius: 2,
          py: 1,
          fontWeight: 600,
          mt: {
            xs: 8,
            sm: 4,
          },
        }}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        افزودن کارت جدید
      </Button>
      <AddCard open={open} setOpen={setOpen} value={value} setValue={setValue} setBankCardData={setBankCardData} />
    </>
  );
}

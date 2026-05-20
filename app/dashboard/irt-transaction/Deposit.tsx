'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { BankCardDataType, DepositDataType, ToggleItemsType } from '@/app/core/Types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BankCard from './BankCard';
import { getBankCard } from '@/lib/getbankCard/bankCard';
import Container from '@/app/Components/Containers/Container/Container';
import DepositConfirm from './DepositConfirm';
import {  goldDeposit, uploadReceipt } from '@/lib/deposit/deposit';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';
import { Upload } from '@mui/icons-material';

const items: ToggleItemsType[] = [
  { title: 'درگاه پرداخت', value: 'payment', id: 1 },
  { title: 'واریز مستقیم', value: 'directPayment', id: 2 },
];
export default function Deposit() {
  const [price, setPrice] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [open,setOpen] = useState(false)
  const [bankCardsData, setBankCardsData] = useState<BankCardDataType[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(1);
    const [depositData, setDepositData] = useState<DepositDataType | null>(
    null
  );
  const [receipt,setReceipt] = useState<null| File>(null)
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);

  const handlePayment = async ()=>{
const response = await goldDeposit(price);
  }

    const handleDirectPayment =  () => {
    setOpen(true)
  };
  const handleUploadReceipt = async()=>{
    if (!receipt) return null
    const formData = new FormData()
      formData.append('receipt',receipt)
    try{
      const response =await uploadReceipt(formData)
        showSnackbar(response?.message)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  const handleClick = ()=>{
    if (!depositData){
      handleDirectPayment()
    }else{
      handleUploadReceipt()
    }
  }
  return (
    <>
    <Card
      style={{
        gap: 3.5,
        p: 0,
        border: 'none',
      }}
    >
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{
          fontSize: {
            xs: 12,
            sm: 18,
          },
        }}
      />
      <Stack gap={3.5}>
        {select === 'payment' && (
          <Stack direction={'column'} gap={3}>
            <InputField placeholder={'ملبغ'} title={'تومان'} value={price} setValue={setPrice} />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#FEF2C0',
                color: 'black',
                borderRadius: 1.5,
                px: 1,
                width: 'fit-content',
                fontSize: {
                  xs: 12,
                  sm: 14,
                },
              }}
            >
              انتخاب حداکثر مقدار واریز
            </Button>
          </Stack>
        )}
        {select === 'directPayment' && (
          <BankCard
            bankCardsData={bankCardsData}
            setBankCardsData={setBankCardsData}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        )}
      </Stack>
          {
        depositData && select != 'payment'&& <>
          <Typography variant="body2" fontSize={12} fontWeight={"bold"}>
          اطلاعات واریز
        </Typography>
        <Container
          style={{
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}

          >
            <Typography variant="body2" fontSize={12} sx={{color:'text.muted'}}>
              کارت مبدا:
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.card_number}
            </Typography>
          </Stack>
         <Stack mt={2}>
           <Typography variant="body2" fontSize={12} sx={{color:'text.muted'}}>
            کارت مقصد:
          </Typography>
         </Stack>
          <Stack
            direction={"row"}
                  justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" fontSize={10}>
              شماره شبا
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.shaba}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
                  justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" fontSize={10}>
              به نام
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.owner}
            </Typography>
          </Stack>
        <Stack component={'label'} htmlFor="upload-file" width={'100%'} direction={'row'} justifyContent={'center'} mt={3}>
  <Button 
    variant="outlined" 
    color="secondary" 
    startIcon={<Upload />}
    component="span" 
    sx={{
      width:'100%',
      py:1.5,borderRadius:2
    }}
  >
    بارگذاری رسید
  </Button>
</Stack>

          <Box 
          component={'input'}
            type="file" 
  id="upload-file" 
  style={{ display: 'none' }} 
    accept="image/*"
  onChange={(e) => {
    const image =e?.target?.files[0]
    setReceipt(image)
     }}
          />
        </Container>
        </>
      }
     {
      select === 'payment'?
       <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 16,
          },
          py: 1.5,
        }}
        onClick={handlePayment}
      >
        واریز
      </Button>
     :!depositData && <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 16,
          },
          py: 1.5,
        }}
        onClick={handleClick}
      >
        {
          !depositData ? 'نمایش اطلاعات مقصد' : 'تایید'
        }
      </Button>}
    </Card>
    <DepositConfirm setDepositData={setDepositData} setOpen={setOpen} open={open} />
    </>
  );
}

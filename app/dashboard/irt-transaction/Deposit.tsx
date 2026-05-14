'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { BankCardDataType, DepositDataType, ToggleItemsType } from '@/app/core/Types';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BankCard from './BankCard';
import { getBankCard } from '@/lib/getbankCard/bankCard';
import Container from '@/app/Components/Containers/Container/Container';
import DepositConfirm from './DepositConfirm';
import { getGoldDeposit, goldDeposit } from '@/lib/deposit/deposit';

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
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);
  const handleDirectPayment = async () => {
    setOpen(true)
  };
  const handlePayment = async ()=>{
const response = await goldDeposit(price);
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
          <Typography variant="body2" fontSize={12} sx={{mt:2}}>
            به اپلیکیشن همراه‌بانک یا خودپرداز بانک بروید و مبلغ مورد نظرتان را
            واریز کنید.مبلغ واریزی مطابق با سیکل پایا به حساب شما در طلاسی
            افزوده می‌شود.
          </Typography>
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
        onClick={handleDirectPayment}
      >
        نمایش اطلاعات مقصد
      </Button>}
    </Card>
    <DepositConfirm setDepositData={setDepositData} setOpen={setOpen} open={open} />
    </>
  );
}

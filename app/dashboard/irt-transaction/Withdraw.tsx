'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { BankCardDataType, RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { Button, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BankCard from './BankCard';
import { getBankCard } from '@/lib/getbankCard/bankCard';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { goldWidthdraw } from '@/lib/transactions/withdraw/withdraw';
import { useAssets } from '../../AssetsProvider';
import Loading from '@/app/Components/Loading/Loading';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { getReports } from '@/lib/getReports/getReports';
import priceFormater from '@/app/core/PriceFormater';
import WithdrawConfirm from './WithdrawConfirm';

const items: ToggleItemsType[] = [
  { title: 'به حساب بانکی', value: 'bank', id: 1 },
  { title: 'به نقرینه', value: 'silver', id: 2 },
];
interface Props {
  setTransactionData:Dispatch<SetStateAction<RecentTransactionDataType[]>>,
    transactionParams:string
    filter:string
    dateRange:DatePickerValue
      setHintIndex:Dispatch<SetStateAction<number>>
}
export default function Withdraw({setTransactionData,transactionParams,filter,dateRange,setHintIndex}:Props) {
  const [price, setPrice] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [bankCardsData, setBankCardsData] = useState<BankCardDataType[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(1);
  const {refetch,assets } = useAssets()
  const [isLoading,setIsLoading] = useState(false)
  const handleWithdraw = async () => {
 try{
  setIsLoading(true)
     const response = await goldWidthdraw(
      price,
      select === 'silver' ? 'SILVER' : 'BANK',
      selectedCard?selectedCard:undefined,
    );
        const transactionData = await getReports(transactionParams,undefined,dateRange,filter);
          setTransactionData(transactionData)
    showSnackbar(response.message,'success')
    setPrice('')
    setSelectedCard(1)
    setOpen(false)
    refetch()
 }catch(error:unknown){
  if (isAxiosError(error)){
    showSnackbar(error.response?.data.message)
  }
 }finally{
  setIsLoading(false)
 }
  };
  const [open,setOpen] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);

  useEffect(()=>{
    setHintIndex(select === 'bank'?2:3)
  },[select,setHintIndex])
  return (
    <>
    <Card style={{ gap: 3.5, p: 0, border: 'none' }}>
      <FilterToggleButton
        items={items}
        active={select}
        setActive={setSelect}
        style={{
          fontSize: {
            xs: 12,
            sm: 18,
          },
        }}
      />
      <Stack gap={3.5}>
        <Stack direction={'column'} gap={3}>
          <InputField type='number' placeholder={'ملبغ'} title={'تومان'} value={price} setValue={setPrice} />
          <Typography variant="body2" color="primary" component={'div'} sx={{cursor:'pointer'}} onClick={()=>setPrice(assets.wallet_balance.toString())}>
            موجودی شما: {priceFormater(assets.wallet_balance )} تومان 
          </Typography>
         
        </Stack>
        {select !== 'silver' && bankCardsData && (
          <BankCard
            bankCardsData={bankCardsData}
            setBankCardsData={setBankCardsData}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        )}
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 16,
          },
          height:60
        }}
        disabled={bankCardsData.length === 0}
        onClick={()=>setOpen(true)}
      >
        برداشت
      </Button>
    </Card>
    <WithdrawConfirm open={open} setOpen={setOpen} isSilverWithdraw={select === 'silver' ? true:false} bankCardsData={bankCardsData.find((bank) => bank.id === selectedCard) || {} as BankCardDataType} handleWithdraw={handleWithdraw} isLoading={isLoading} finalPrice={price}  />
    </>
  );
}

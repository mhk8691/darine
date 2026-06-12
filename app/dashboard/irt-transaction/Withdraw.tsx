'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { BankCardDataType, RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { Button, Stack } from '@mui/material';
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

const items: ToggleItemsType[] = [
  { title: 'به حساب بانکی', value: 'bank', id: 1 },
  { title: 'به نقره سی', value: 'silver', id: 2 },
];
interface Props {
  setTransactionData:Dispatch<SetStateAction<RecentTransactionDataType[]>>,
    transactionParams:string
    filter:string
    dateRange:DatePickerValue
}
export default function Withdraw({setTransactionData,transactionParams,filter,dateRange}:Props) {
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
    refetch()
 }catch(error:unknown){
  if (isAxiosError(error)){
    showSnackbar(error.response?.data.message)
  }
 }finally{
  setIsLoading(false)
 }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);
  return (
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
          onClick={()=>setPrice(assets?.wallet_balance+'')}
          >
            انتخاب کل موجودی
          </Button>
        </Stack>
        {select !== 'silver' && (
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
        onClick={handleWithdraw}
        disabled={isLoading || bankCardsData.length === 0}
      >
        {isLoading ? <Loading size={30}/>:'برداشت'}
      </Button>
    </Card>
  );
}

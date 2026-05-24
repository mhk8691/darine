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
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';
import { Upload } from '@mui/icons-material';
import { goldDeposit } from '@/lib/transactions/deposit/deposit';
import { useAssets } from '../AssetsProvider';
import Loading from '@/app/Components/Loading/Loading';

const items: ToggleItemsType[] = [
  { title: 'درگاه پرداخت', value: 'gateway', id: 1 },
  { title: 'واریز مستقیم', value: 'receipt', id: 2 },
];
export default function Deposit() {
  const [price, setPrice] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [open,setOpen] = useState(false)
  const [bankCardsData, setBankCardsData] = useState<BankCardDataType[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(1);
  const {refetch} = useAssets()
    const [depositData, setDepositData] = useState<DepositDataType | null>(
    null
  );
  const [isLoading,setIsLoading] = useState(false)
  const [receipt,setReceipt] = useState<null| File>(null)
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);

    const handleDeposit =async  (method:'RECEIPT'|'GATEWAY') => {
    const formData = new FormData()
      formData.append('amount',price)
      if (method === 'RECEIPT'){
        if (!receipt) return null
        formData.append('receipt',receipt)
        formData.append('method','RECEIPT')
      }
      else{
         formData.append('method','GATEWAY')
      }
    try{
      setIsLoading(true)
      const response =await goldDeposit(formData)
        showSnackbar(response?.message,true)
      refetch()
        setPrice('')
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }finally{
      setIsLoading(false)
    }
  };

  const handleClick = ()=>{
    if (select === 'gateway'){
      handleDeposit('GATEWAY')
    }else{
      if (!depositData){
        setOpen(true)
      }else{
        handleDeposit('RECEIPT')
      }
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
        {select === 'gateway' && (
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
              onClick={()=>setPrice('400000000')}
            >
              انتخاب حداکثر مقدار واریز
            </Button>
          </Stack>
        )}
        {select === 'receipt' &&(
          <BankCard
            bankCardsData={bankCardsData}
            setBankCardsData={setBankCardsData}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        )}
      </Stack>
          {
        depositData && select != 'receipt'&& <>
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
    if (e.target.files === null) return null
    const image =e.target.files[0]
    setReceipt(image)
     }}
          />
        </Container>
        </>
      }
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
        onClick={handleClick}
        disabled={isLoading}
      >
        {
          isLoading ? <Loading size={30}/>:select === 'receipt' ? !depositData ? 'نمایش اطلاعات مقصد' : 'تایید':'واریز'
        }
      </Button>
    </Card>
    <DepositConfirm setDepositData={setDepositData} setOpen={setOpen} open={open} />
    </>
  );
}

'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { BankCardDataType, DepositDataType, RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { Box, Button, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BankCard from './BankCard';
import { getBankCard } from '@/lib/getbankCard/bankCard';
import Container from '@/app/Components/Containers/Container/Container';
import DepositConfirm from './DepositConfirm';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';
import { Close, Upload } from '@mui/icons-material';
import { goldDeposit } from '@/lib/transactions/deposit/deposit';
import { useAssets } from '../../AssetsProvider';
import Loading from '@/app/Components/Loading/Loading';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { getReports } from '@/lib/getReports/getReports';
import Image from 'next/image';
import { getBankInfoWithSheba } from 'ir-banks-info';

const items: ToggleItemsType[] = [
  { title: 'درگاه پرداخت', value: 'gateway', id: 1 },
  { title: 'واریز مستقیم', value: 'receipt', id: 2 },
];
interface Props {
  setTransactionData:Dispatch<SetStateAction<RecentTransactionDataType[]>>
  transactionParams:string
    filter:string
    dateRange:DatePickerValue
}
export default function Deposit({setTransactionData,transactionParams,filter,dateRange}:Props) {
  const [checked, setChecked] = useState(false);
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
const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
const [zoomOpen, setZoomOpen] = useState(false);
const [description, setDescription] = useState('');

const handleReceiptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) return;
  const image = e.target.files[0];
  setReceipt(image);
  const url = URL.createObjectURL(image);
  setReceiptPreview(url);
};
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
        formData.append('description',description)

        formData.append('method','RECEIPT')
      }
      else{
         formData.append('method','GATEWAY')
      }
    try{
      setIsLoading(true)
      const response =await goldDeposit(formData)
  const transactionData = await getReports(transactionParams,undefined,dateRange,filter);
      setTransactionData(transactionData)
        showSnackbar(response?.message,'success')
      refetch()
      setDepositData(null)
        setPrice('')
        setDescription('')
        setReceipt(null)
        setReceiptPreview('')
        setChecked(false)
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
              onClick={()=>setPrice('400000000')}
            >
              انتخاب حداکثر مقدار واریز
            </Button>
          </Stack>
      
      </Stack>
          {
        depositData && select === 'receipt'&& <>
          <Typography variant="body2" fontSize={12} fontWeight={"bold"}>
          اطلاعات واریز
        </Typography>
    <Container style={{ flexDirection: "column", gap: 2 }}>
  <Stack>
    <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
      کارت مقصد:
    </Typography>
  </Stack>

  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
    <Typography variant="body2" fontSize={10}>شماره شبا</Typography>
    <Typography variant="body2" fontSize={12}>{depositData.sheba}</Typography>
  </Stack>

  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
    <Typography variant="body2" fontSize={10}>بانک</Typography>
    <Stack direction={'row'} gap={ getBankInfoWithSheba(depositData?.sheba)?.logo ? 1 :0} alignItems={'center'} justifyContent={'end'} width={'100%'}>
      <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
        {getBankInfoWithSheba(depositData?.sheba.replace('IR', ''))?.persianName}
      </Typography>
      {
        getBankInfoWithSheba(depositData?.sheba)?.logo &&
      <Image src={getBankInfoWithSheba(depositData?.sheba)?.logo + ''} alt={''} width={27} height={27} />
      }
    </Stack>
  </Stack>

  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
    <Typography variant="body2" fontSize={10}>به نام</Typography>
    <Typography variant="body2" fontSize={12}>{depositData.full_name}</Typography>
  </Stack>

  {receiptPreview && (
    <>
      <Box
        onClick={() => setZoomOpen(true)}
        sx={{
          mt: 2,
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          cursor: 'zoom-in',
          position: 'relative',
         maxHeight:'100%',
         minHeight:250
        }}
      >
        <Image
          src={receiptPreview}
          alt="رسید آپلود شده"
          fill
          style={{ objectFit: 'cover' }}
        />
    
      </Box>

      <Dialog
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none' } }}
      >
        <DialogContent
          sx={{ p: 0, position: 'relative', cursor: 'zoom-out' }}
          onClick={() => setZoomOpen(false)}
        >
          <Box sx={{ position: 'relative', width: '100%', minHeight: 400 }}>
            <Image
              src={receiptPreview}
              alt="رسید"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <IconButton
            onClick={() => setZoomOpen(false)}
            sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', bgcolor: 'rgba(0,0,0,0.4)' }}
          >
            <Close fontSize="small" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </>
  )}

  <Stack component={'label'} htmlFor="upload-file" width={'100%'} direction={'row'} justifyContent={'center'} mt={2}>
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<Upload />}
      component="span"
      sx={{ width: '100%', py: 1.5, borderRadius: 2 }}
    >
      {receiptPreview ? 'تغییر رسید' : 'بارگذاری رسید'}
    </Button>
  </Stack>

  <Box
    component={'input'}
    type="file"
    id="upload-file"
    style={{ display: 'none' }}
    accept="image/*"
    onChange={handleReceiptChange}
  />

  <InputField
    type="text"
    placeholder={'توضیحات (اختیاری)'}
    title={''}
    value={description}
    setValue={setDescription}
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
    <DepositConfirm setDepositData={setDepositData} setOpen={setOpen} open={open} checked={checked} setChecked={setChecked} />
    </>
  );
}

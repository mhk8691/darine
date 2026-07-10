'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';

import Trade from './Trade';
import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import ChartGold from '@/app/Components/Chart/ChartGold';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import LimitOrderTable from './LimitOrderTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { getLimitOrder } from '@/lib/limit-order/limitOrder';
import { LimitOrderDataType, ToggleItemsType } from '@/app/core/Types';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { statuses } from '../reports/DepositTable';
import LimitOrderGuide from './LimitOrderGuide';
import BackLink from '../BackLink';
const tabs = [{ title: 'خرید ' }, { title: 'فروش' }];

export const buyItems: ToggleItemsType[] = [
  { title: 'در قیمت پایین تر', value: 'min', id: 1 },
];
export const sellItems: ToggleItemsType[] = [
  { title: 'در قیمت بالاتر', value: 'max', id: 1 },
];


export default function LimitOrder() {
    const [price, setPrice] = useState('');
    const [targetPrice, setTargetPrice] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [id,setId] = useState(0)
    // const [select, setSelect] = useState(type === 'SELL' ? sellItems[0].value : buyItems[0].value);
    const [select, setSelect] = useState('min');
  const [tab,setTab] = useState(0)
    const [gold,setGold] = useState('')
   const [status,setStatus] = useState('')
      const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
      const[data,setData] = useState<LimitOrderDataType[]>([])
       const [openModal,setOpenModal] = useState(false)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const getData = async ()=>{
    try{
      const response = await getLimitOrder(status,dateRange)
      setData(response || [])
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  const children: ReactNode[] = [<Trade key={1} 
    setId={setId}
    id={id}
    price={price}
    setPrice={setPrice}
    targetPrice ={targetPrice}
    setTargetPrice={setTargetPrice}
    gold={gold}
    setGold={setGold}
    select={select}
    editMode={editMode}
    setEditMode={setEditMode}
    getData={getData}
setSelect={setSelect}
    type="BUY"  />, <Trade key={2} type="SELL"  getData={getData}   
    setId={setId}
    id={id}  
    price={price}
    setPrice={setPrice}
    targetPrice ={targetPrice}
    setTargetPrice={setTargetPrice}
    gold={gold}
    setGold={setGold}
    select={select}
    editMode={editMode}
    setEditMode={setEditMode}
setSelect={setSelect}
 />];

  useEffect(()=>{
    getData()
  },[dateRange,status])
  return (

    <>
    {!isDesktop &&   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <BackLink title="سفارش با قیمت" />
               <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={18} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
               راهنما
              </Typography>
             </Stack>}

    <Grid
        size={{
          xs: 12,
          md: 4.8,
        }}
      >
            <Card
      style={{
        px: 0,
        py: {
          xs: 1.5,
          sm: 3,
        },
      }}
    >
        {isDesktop && (
       
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={3} mb={2}>
           <Typography variant="h2" fontSize={22}>
            خرید و فروش طلا
          </Typography>
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={22} sx={{textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>

      )}
      <CustomTabs
        tabList={tabs}
        customValue={tab}
        setCustomValue={setTab}
        style={{
          fontSize: {
            xs: 12,
            sm: 22,
          },
        }}
      >
        {children}
      </CustomTabs>
    </Card>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 7.2,
        }}
      >
        <ChartGold
          positionPrice="bottom"
          priceStyle={{
            mt: {
              xs: 2,
              md: 5,
            },
            mb: {
              xs: 0,
              md: 2.5,
            },
          }}
          cardStyle={{
            pt: {
              xs: 2,
              md: 5.5,
            },
          }}
          dividerStyle={{
            mt: {
              xs: 0,
              md: 1,
            },
          }}
        />
      </Grid>
      <Grid size={12}>
        <OrderDetail
        statuses={statuses}
dateRange={dateRange}
setDateRange={setDateRange}
setStatus={setStatus}
status={status}
          title="لیست معاملات اخیر"
          toggleItems={[]}
          type="chip"
          emptyMessage="سفارشی برای شما به ثبت نرسیده است"
          tableBody={<LimitOrderTable
          setTab={setTab}
          getData={getData}
             data={data}
    setPrice={setPrice}
    setTargetPrice={setTargetPrice}
    setGold={setGold}
setSelect={setSelect}
setEditMode={setEditMode}
setId={setId}
             />}
          tableHead={[
            'نوع',
            'قیمت هدف',
            'قیمت',
            'وزن',

            'وضعیت',
            'کد پیگیری',

            'تاریخ',
            'ویرایش',
            'حذف'
          ]}
          listLength={data.length}
        />
      </Grid>
      <LimitOrderGuide open={openModal} setOpen={setOpenModal} />
    </>
  );
}

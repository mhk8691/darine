'use client';
import { IconButton, Stack, SxProps, Typography } from '@mui/material';
import LineChart from '../LineChart/LineChart';
import BottomPrice from './BottomPrice';
import TopPrice from './TopPrice';
import FilterToggleButton from '../FilterToggleButton/FilterToggleButton';
import { useEffect, useState } from 'react';
import { ChartGoldDataType, ToggleItemsType } from '@/app/core/Types';
import Container from '../Containers/Container/Container';
import { getChartGold } from '@/lib/chart/getChartGold';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Snackbar/Snackbar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GoldBubble from './GoldBubble';

interface Props {
  positionPrice: 'top' | 'bottom' | 'both';
  chartHeight?: string;
  cardStyle?: SxProps;
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
}
const toggleItems: ToggleItemsType[] = [
  {
    id: 1,
    title: '۲۴ ساعت اخیر',
    value: '24TH',
  },
  {
    id: 2,
    title: 'هفتگی',
    value: 'WEEK',
  },
  {
    id: 3,
    title: 'ماهانه',
    value: 'MONTH',
  },
];
const pData = [
  18650000, 18680000, 18720000, 18690000, 18750000,
  18810000, 18770000, 18840000, 18890000, 18830000,
  18910000, 18960000, 18920000, 19000000, 18970000,
  19050000, 19010000, 19080000, 19130000, 19090000,
  19170000, 19210000, 19180000, 19250000, 19290000,
  19230000, 19310000, 19360000, 19320000, 19400000,
  19370000, 19440000, 19490000, 19450000, 19520000,
  19570000, 19530000, 19610000, 19660000, 19620000,
  19690000, 19740000, 19700000, 19780000, 19830000,
  19790000, 19870000, 19910000, 19880000, 19950000,
  19990000, 19940000, 20010000, 20060000, 20020000,
  20090000, 20130000, 20090000, 20170000, 20220000,
  20180000, 20250000, 20300000, 20260000, 20330000,
  20380000, 20340000, 20410000, 20460000, 20420000,
  20490000, 20530000, 20490000, 20570000, 20620000,
  20580000, 20650000, 20700000, 20660000, 20730000,
  20770000, 20730000, 20810000, 20860000, 20820000,
  20890000, 20940000, 20900000, 20970000, 21010000,
  20980000, 21050000, 21100000, 21060000, 21130000,
  21180000, 21140000, 21210000, 21260000, 21220000
];

const xLabels = Array.from({ length: 100 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (99 - i));

  return date.toLocaleDateString("fa-IR", {
    month: "short",
    day: "numeric",
  });
});
export default function ChartGold({
  positionPrice,
  chartHeight,
  cardStyle,
  dividerStyle,
  priceStyle,
}: Props) {
  const [select, setSelect] = useState(toggleItems[0]?.value);
  const [chartData,setChartData] = useState<ChartGoldDataType | null>(null)
  const [open,setOpen] = useState(false)
  useEffect(()=>{
    const getData = async ()=>{
     try{
       const response = await getChartGold(select)
      setChartData(response)
     }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
     }
    }
       getData();
        const interval = setInterval(() => {
      getData();
    }, 45 * 1000);

    return () => clearInterval(interval);
  },[select])
  if (!chartData?.stats || !chartData.chart) return null
  return (
    <>
    <Container style={{ px: 2.5, ...cardStyle }}>
      <Typography
        variant="h2"
        fontSize={{
          xs: 14,
          sm: 22,
        }}
        fontWeight={'bold'}
        sx={{ color: 'text.primary' }}
      >
        نمودار لحظه ای قیمت طلا
      </Typography>
      <Stack
        direction={'row'}
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-end',
        }}
        mb={positionPrice === 'top' || positionPrice === 'both' ? 0 : 2.5}
        mt={{
          xs: 2,
          sm: 1,
        }}
      >
        <Stack
          width={{
            md: '45%',
            lg: '37%',
          }}
        >
          <FilterToggleButton
            active={select}
            setActive={setSelect}
            items={toggleItems}
            style={{
              fontSize: {
                xs: 10,
                sm: 12,
              },
              py: 0.7,
            }}
          />
        </Stack>
      </Stack>
      {(positionPrice === 'top' || positionPrice === 'both') && <TopPrice chartData={chartData} />}
            <Stack direction={'row'}  alignItems={'center'} gap={0}>
              <Typography variant="body1" >
              (حباب -۴.۴۸ ٪)  
            </Typography>
            <IconButton onClick={()=>setOpen(true)}>
                <InfoOutlinedIcon  />
              </IconButton>
            </Stack>
      <LineChart
      data={pData}
      labels={xLabels}
        width="100%"
        height={chartHeight || '180px'}
        noGradiant={false}
        color="#FFD700"
       chartData={chartData}
        noLabel={false}
      />
      {(positionPrice === 'bottom' || positionPrice === 'both') && (
        <BottomPrice priceStyle={priceStyle} dividerStyle={dividerStyle} chartData={chartData} />
      )}
    </Container>
    <GoldBubble open={open} setOpen={setOpen} /> 
    </>
  );
}

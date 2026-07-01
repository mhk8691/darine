// ChartGold.tsx
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
  { id: 1, title: '۲۴ ساعت اخیر', value: '24TH' },
  { id: 2, title: 'هفتگی', value: 'WEEK' },
  { id: 3, title: 'ماهانه', value: 'MONTH' },
];

export default function ChartGold({
  positionPrice,
  chartHeight,
  cardStyle,
  dividerStyle,
  priceStyle,
}: Props) {
  const [select, setSelect] = useState(toggleItems[0]?.value);
  const [chartData, setChartData] = useState<ChartGoldDataType | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getChartGold(select);
        setChartData(response);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }
    };

    getData();
    // const interval = setInterval(() => {
    //   getData();
    // }, 45 * 1000);

    // return () => clearInterval(interval);
  }, [select]);




  if (!chartData?.stats || !chartData.chart) return null;

  return (
    <>
      <Container style={{ px: 2.5, ...cardStyle }}>
        <Typography
          variant="h2"
          fontSize={{ xs: 14, sm: 22 }}
          fontWeight="bold"
          sx={{ color: 'text.primary' }}
        >
          نمودار لحظه ای قیمت طلا
        </Typography>

        <Stack
          direction="row"
          justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}
          mb={positionPrice === 'top' || positionPrice === 'both' ? 0 : 2.5}
          mt={{ xs: 2, sm: 1 }}
        >
          <Stack width={{ md: '45%', lg: '37%' }}>
            <FilterToggleButton
              active={select}
              setActive={setSelect}
              items={toggleItems}
              style={{ fontSize: { xs: 10, sm: 12 }, py: 0.7 }}
            />
          </Stack>
        </Stack>

        {(positionPrice === 'top' || positionPrice === 'both') && (
          <TopPrice chartData={chartData} />
        )}

        <Stack direction="row" alignItems="center" gap={0}>
          <Typography variant="body1">
            (حباب {chartData.bubble.bubble_percent} ٪)
          </Typography>
          <IconButton onClick={() => setOpen(true)}>
            <InfoOutlinedIcon />
          </IconButton>
        </Stack>

        <LineChart
          data={chartData.chart.prices}
          labels={chartData.chart.labels}
          width="100%"
          height={chartHeight || '180px'}
          color="#FFD700"
          noLabel={false}
        />

        {(positionPrice === 'bottom' || positionPrice === 'both') && (
          <BottomPrice
            select={select}
            priceStyle={priceStyle}
            dividerStyle={dividerStyle}
            chartData={chartData}
          />
        )}
      </Container>

      <GoldBubble open={open} setOpen={setOpen} />
    </>
  );
}
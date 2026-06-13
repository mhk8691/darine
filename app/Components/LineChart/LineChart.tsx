// LineChart.tsx
'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  width?: string;
  height?: string;
  color?: string;
  noGradient?: boolean;
  noLabel?: boolean;
  data: number[];
  labels: string[];
}

export default function LineChart({
  width = '100%',
  height = '350',
  color = '#008FFB',
  noGradient = false,
  noLabel = false,
  data,
  labels,
}: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const series = [{name:'قیمت', data }];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    stroke: {
      curve: 'straight',
      width: 2,
    },
 xaxis: {
  type: 'category',
  categories: labels,
  tickAmount: 10,
  labels: {
    show: !noLabel,
    rotate: 0,
    style: {
      fontSize: '10px',
    },
  },
  axisBorder: { show: false },
  axisTicks: { show: false },
},
    yaxis: {
      labels: { show: !noLabel },
    },
   tooltip: {
  x: { show: true },
  y: {
    formatter: (val) => `${val.toLocaleString('fa-IR')} تومان`,
  },
},
    fill: noGradient
      ? { type: 'solid', opacity: 0.3 }
      : {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.05,
            stops: [0, 100],
          },
        },
    colors: [color],
    grid: {
      borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      strokeDashArray: 4,
    },
    theme: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  };

  if (!mounted) return null;

  return (
    <Box sx={{ width, height }}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={height}
        width="100%"
      />
    </Box>
  );
}
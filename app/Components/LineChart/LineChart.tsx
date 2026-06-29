'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import priceFormater from '@/app/core/PriceFormater';

// فرض: این تابع از قبل داری

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  width?: string;
  height?: string;
  color?: string;
  noGradient?: boolean;
  noLabel?: boolean;
  data: number[];
  labels: string[]; // فرض: تاریخ/ساعت داخل اینه
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

  const series = [{ data,name: 'قیمت',  }];

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
      labels: {
        show: !noLabel,
        formatter: (val) => priceFormater(val),
      },
    },

   tooltip: {
  x: {
    show: true,
    formatter: (_: string, opts: any) => {
      if (!opts) return '';

      const value = labels[opts.dataPointIndex];

      const date = new Date(value);

      if (!isNaN(date.getTime())) {
        return date.toLocaleString('fa-IR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      }

      return value;
    },
  },

  y: {
    formatter: (val: number) =>
      `\u2066${priceFormater(val)}\u2069 تومان`,
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
      borderColor: isDarkMode
        ? 'rgba(255,255,255,0.1)'
        : 'rgba(0,0,0,0.1)',
      strokeDashArray: 4,
    },

    theme: {
      mode: isDarkMode ? 'dark' : 'light',
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          xaxis: {
            labels: {
              rotate: -45,
              hideOverlappingLabels: true,
              style: {
                fontSize: '9px',
              },
            },
          },
        },
      },
    ],
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
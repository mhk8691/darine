'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import priceFormater from '@/app/core/PriceFormater';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface Props {
  width?: string;
  height?: string;
  color?: string;
  noGradient?: boolean;
  noLabel?: boolean;
  data: number[];
  labels: string[];
}

const toFaDigits = (value: string | number) =>
  String(value).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);

const formatXAxisTime = (value: number | string) => {
  const date = new Date(value);

  if (isNaN(date.getTime())) return '';

  return toFaDigits(
    date.toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
  );
};

const formatTooltipDate = (value: number | string) => {
  const date = new Date(value);

  if (isNaN(date.getTime())) return '';

  return toFaDigits(
    date.toLocaleString('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }),
  );
};

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

  const series = useMemo(
    () => [
      {
        name: 'قیمت',
        data: labels.map((label, index) => ({
          x: new Date(label).getTime(),
          y: data[index],
        })),
      },
    ],
    [labels, data],
  );

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      background: 'transparent',
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    markers: {
      size: 0,
    },

    stroke: {
      curve: 'straight',
      width: 2,
    },

    colors: [color],

    xaxis: {
      type: 'datetime',

      tickAmount: 10,

      labels: {
        show: !noLabel,
        rotate: 0,

        formatter: (value) => formatXAxisTime(Number(value)),

        style: {
          fontSize: '10px',
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: !noLabel,

        formatter: (val) => toFaDigits(priceFormater(val)),
      },
    },

    tooltip: {
      x: {
        formatter: (value) => formatTooltipDate(Number(value)),
      },

      y: {
        formatter: (val: number) =>
          `\u2066${toFaDigits(priceFormater(val))}\u2069 تومان`,
      },
    },

    fill: noGradient
      ? {
          type: 'solid',
          opacity: 0.3,
        }
      : {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.05,
            stops: [0, 100],
          },
        },

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

              formatter: (value) => formatXAxisTime(Number(value)),

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
        width="100%"
        height={height}
      />
    </Box>
  );
}
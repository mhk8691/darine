'use client';

import { useTheme } from '@mui/material';
import Image from 'next/image';

export default function EmptyTable() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Image
      src={`/images/${isDarkMode ? 'emptyTableDark.png' : 'emptyTable.webp'}`}
      width={300}
      height={270}
      alt=""
    />
  );
}

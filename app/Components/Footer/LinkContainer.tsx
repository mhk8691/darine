'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import DesktopLinks from './DesktopLinks';
import LaptopLinks from './LaptopLinks';

export default function LinkContainer() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down('md'));
  return <>{isLaptop ? <LaptopLinks /> : <DesktopLinks />}</>;
}

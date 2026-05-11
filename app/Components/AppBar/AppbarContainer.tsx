'use client';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import DesktopAppbar from './DesktopAppbar';
import MobileAppbar from './MobileAppbar';

export default function AppbarContainer() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return <>{isDesktop ? <DesktopAppbar /> : <MobileAppbar />}</>;
}

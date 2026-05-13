'use client';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import MobileAppbar from './MobileAppbar';
import Banners from './Banners';
import Trading from './trades/Trading/Trading';
import AllAssets from './wallet/AllAssets';

export default function Dashboard() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      {isDesktop ? (
        <>
          <Grid
            size={{
              md: 5.5,
              xs: 12,
            }}
          >
            <Trading />
          </Grid>
          <Grid
            size={{
              md: 6.5,
              xs: 12,
            }}
          >
            <AllAssets  style={{
                minHeight: {
                  xs: 160,
                  md: 400,
                },
              }} />
          </Grid>
        </>
      ) : (
        <>
          <Grid size={12}>
            <MobileAppbar />
          </Grid>
          <Grid size={12}>
            <Banners />
          </Grid>
        </>
      )}
    </>
  );
}

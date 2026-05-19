import Card from '@/app/Components/Containers/Container/Container';
import { Grid, Typography } from '@mui/material';

import { Metadata } from 'next';
import ReportsContainer from './ReportsContainer';
export const metadata: Metadata = {
  title: 'گزارشات | دارینه',
  description: '',
};

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card
          style={{
            px: {
              sx: 0,
              sm: 4,
            },
            border: {
              sx: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            گزارش ها
          </Typography>
            <ReportsContainer/>
        </Card>
      </Grid>
    </Grid>
  );
}

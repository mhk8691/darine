import Card from '@/app/Components/Containers/Container/Container';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import AddCardContainer from './AddCardContainer';
import BankCard from './BankCard';
import BackLink from '../BackLink';
export const metadata: Metadata = {
  title: 'کارت بانکی | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container>
      <BackLink title="کارت های بانکی شما" />
      <Grid size={12}>
        <Card
          style={{
            px: {
              xs: 0,
              sm: 4,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Grid
            size={12}
            spacing={{
              xs: 2,
              sm: 1.5,
            }}
            container
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
                key={item}
              >
                <BankCard />
              </Grid>
            ))}
          </Grid>
          <AddCardContainer />
        </Card>
      </Grid>
    </Grid>
  );
}

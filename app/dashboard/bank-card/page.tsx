import Card from '@/app/Components/Containers/Container/Container';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import AddCardContainer from './CardContainer';
import BankCard from './BankCard';
import BackLink from '../BackLink';
import CardContainer from './CardContainer';
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
     <CardContainer/>
        </Card>
      </Grid>
    </Grid>
  );
}

'use client';

import SalesInvoiceCard, { SalesInvoiceData } from './SalesInvoiceCard';
import { Stack } from '@mui/material';
import InvoiceActionButtons from './InvoiceActionButtons';
import Container from '@/app/Components/Containers/Container/Container';


const sellInvoice: SalesInvoiceData = {
  type: 'sell', 
  invoiceDate: '۱۴۰۵/۰۳/۱۲  ۱۹:۰۶',
  buyer: {
    name: 'فروشگاه دارینه',
    province: 'قم',
    address: 'میدان توحید، پاساژ شهر طلا',
  },
  seller: {
    name: 'محمد محمدی',
    nationalId: '0371234567',
    phone: '09191234567',
  },
  gold: {
    weightGrams: '۰٫۰۰۵',
    purity: '۱۸ عیار',
    pricePerGram: '۱۸,۳۲۱,۰۰۰ تومان',
    fee: '۹۱۷ تومان',
  },
  totalAmount: '۹۰,۶۸۸ تومان',
};

const buyInvoice: SalesInvoiceData = {
  ...sellInvoice,
  type: 'buy', 
};

export default function InvoicePageExample() {

  return (
         <Container
               style={{
                 gap: 3.15,
                 py: 3,
                 px: {
                   xs: 2,
                   sm: 4,
                   md: 2,
                   lg: 4,
                 },
               }}
             >
        

          <SalesInvoiceCard data={buyInvoice} />

          <Stack sx={{ mt: { xs: 2, sm: 3 } }}>
            <InvoiceActionButtons
              onBack={() => console.log('back')}
              onDownload={() => console.log('download')}
            />
          </Stack>
        </Container>
  );
}

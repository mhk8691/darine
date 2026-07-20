'use client';

import { useState } from 'react';
import { Stack } from '@mui/material';
import Container from '@/app/Components/Containers/Container/Container';
import SalesInvoiceCard, { SalesInvoiceData } from './SalesInvoiceCard';
import InvoiceActionButtons from './InvoiceActionButtons';
import { downloadInvoicePdf } from './downloadInvoicePdf';

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

export default function InvoicePage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadInvoicePdf(sellInvoice);
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

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
      <SalesInvoiceCard data={sellInvoice} />

      <Stack sx={{ mt: { xs: 2, sm: 3 } }}>
        <InvoiceActionButtons
          onBack={handleBack}
          onDownload={handleDownload}
          downloading={downloading}
        />
      </Stack>
    </Container>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import Container from '@/app/Components/Containers/Container/Container';
import { TradeInvoiceType } from '@/app/core/Types';
import { getInvoices, downloadInvoices } from '@/lib/getInvoices/getInvoices';
import { useParams } from 'next/navigation';
import InvoiceActionButtons from './InvoiceActionButtons';
import SalesInvoiceCard from './SalesInvoiceCard';
import Loading from '@/app/Components/Loading/Loading';

export default function TradeInvoicePage() {
  const params = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<TradeInvoiceType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInvoices(params.id)
      .then((res) => setInvoice(res))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <Box sx={{ py: 10, textAlign: 'center' }}><Loading size={30} /></Box>;
  if (!invoice) return null;

  return (
    <Container style={{ py: 3 }}>
      {/* پاس دادن دیتای آب‌شده به کامپوننت مشترک */}
      <SalesInvoiceCard data={invoice} />

      <Stack sx={{ mt: 3 }}>
        <InvoiceActionButtons
          onBack={() => window.history.back()}
          onDownload={() => downloadInvoices(params.id, invoice.invoice_date)}
        />
      </Stack>
    </Container>
  );
}
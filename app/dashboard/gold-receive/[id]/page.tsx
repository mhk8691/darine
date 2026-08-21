'use client';

import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import Container from '@/app/Components/Containers/Container/Container';
import { PhysicalInvoiceType } from '@/app/core/Types';
import { getPhysicalInvoice, downloadPhysicalInvoice } from '@/lib/getInvoices/getInvoices';
import { useParams } from 'next/navigation';
import SalesInvoiceCard from '../../trades/[id]/SalesInvoiceCard';
import InvoiceActionButtons from '../../trades/[id]/InvoiceActionButtons';
import Loading from '@/app/Components/Loading/Loading';

export default function PhysicalInvoicePage() {
  const params = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<PhysicalInvoiceType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhysicalInvoice(params.id)
      .then((res) => setInvoice(res))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <Box sx={{ py: 10, textAlign: 'center' }}><Loading size={30} /></Box>;
  if (!invoice) return null;

  return (
    <Container style={{ py: 3 }}>
      {/* دقیقاً همون کامپوننت مشترک، این‌بار با دیتای فیزیکی */}
      <SalesInvoiceCard data={invoice} />

      <Stack sx={{ mt: 3 }}>
        <InvoiceActionButtons
          onBack={() => window.history.back()}
          onDownload={() => downloadPhysicalInvoice(params.id, invoice.invoice_date)}
        />
      </Stack>
    </Container>
  );
}
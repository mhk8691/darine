'use client';

import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Container from '@/app/Components/Containers/Container/Container';
import SalesInvoiceCard from './SalesInvoiceCard';
import InvoiceActionButtons from './InvoiceActionButtons';
import { InvoiceType } from '@/app/core/Types';
import { getInvoices } from '@/lib/getInvoices/getInvoices';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useParams } from 'next/navigation';


export default function InvoicePage() {
    const params = useParams<{ id: string }>();

  const [invoice,setInvoice] = useState<InvoiceType>({} as InvoiceType)
  const handleBack = () => {
    window.history.back();
  };

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await getInvoices(params.id)
        setInvoice(response)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message,'error')
        }
      }
    }
    getData()
  },[params.id])

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
      <SalesInvoiceCard data={invoice} />

      <Stack sx={{ mt: { xs: 2, sm: 3 } }}>
        <InvoiceActionButtons
          onBack={handleBack}
          id={params?.id || '0'}
          date={invoice.invoice_date}
        />
      </Stack>
    </Container>
  );
}
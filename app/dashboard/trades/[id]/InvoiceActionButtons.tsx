'use client';

import { Stack, Button, CircularProgress } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useRouter } from 'next/navigation';
import { downloadInvoices } from '@/lib/getInvoices/getInvoices';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useState } from 'react';
import Loading from '@/app/Components/Loading/Loading';

export interface InvoiceActionButtonsProps {
  onBack?: () => void;
  id:string
}


export default function InvoiceActionButtons({
  onBack,
  id
}: InvoiceActionButtonsProps) {
  const [loading,setLoading] = useState(false)
  const router = useRouter()

  const handleDownload = async ()=>{
    try{
      setLoading(true)
      const response = await downloadInvoices(id)
      router.push(response.buyer_address)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message,'error')
      }
    }finally{
        setLoading(false)
    }
  }
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={1.5}
      sx={{ width: '100%' }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleDownload}
        startIcon={
       !loading ? <FileDownloadOutlinedIcon />:<></>
        }
        sx={{
          flex: { xs: '1 1 auto', sm: 1 },
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '0.95rem',
          py: 1.4,
          color: '#10100F',
      
        }}
      >
        {loading ? <Loading size={30} />:'دانلود فاکتور'}
      </Button>

      <Button
        variant="outlined"
        size="large"
        onClick={onBack}
        sx={{
          flex: { xs: '1 1 auto', sm: '0 0 auto' },
          minWidth: { sm: 150 },
          borderRadius: '10px',
          fontWeight: 600,
          fontSize: '0.95rem',
          py: 1.4,
          borderColor: 'background.border',
          color: 'text.primary',
          '&:hover': {
            borderColor: 'text.subtitle',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.04)'
                : 'rgba(0,0,0,0.03)',
          },
        }}
      >
        بازگشت
      </Button>
    </Stack>
  );
}

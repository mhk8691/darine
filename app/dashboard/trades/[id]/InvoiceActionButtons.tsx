'use client';

import { Stack, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useState } from 'react';
import Loading from '@/app/Components/Loading/Loading';

export interface InvoiceActionButtonsProps {
  onBack?: () => void;
  onDownload?: () => Promise<{ blob: Blob; fileName: string }>;
}

export default function InvoiceActionButtons({ onBack, onDownload }: InvoiceActionButtonsProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!onDownload) return;

    try {
      setLoading(true);
      const { blob, fileName } = await onDownload();

const mimeType = blob.type || 'application/octet-stream';

if (window.AndroidBridge) {
  const reader = new FileReader();

  reader.onloadend = () => {
    window.AndroidBridge?.getBase64FromBlobData(
      reader.result,
      mimeType,
      fileName
    );
  };

  reader.readAsDataURL(blob);
} else {
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
}
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data?.message || 'خطا در دانلود فاکتور', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: '100%' }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleDownload}
        disabled={loading}
        startIcon={!loading ? <FileDownloadOutlinedIcon /> : null}
        sx={{
          flex: { xs: '1 1 auto', sm: 1 },
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '0.95rem',
          py: 1.4,
        }}
      >
        {loading ? <Loading size={30} /> : 'دانلود فاکتور'}
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
        }}
      >
        بازگشت
      </Button>
    </Stack>
  );
}
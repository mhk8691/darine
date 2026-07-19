'use client';

import { Stack, Button, CircularProgress } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export interface InvoiceActionButtonsProps {
  onDownload?: () => void;
  onBack?: () => void;
  downloading?: boolean;
}


export default function InvoiceActionButtons({
  onDownload,
  onBack,
  downloading = false,
}: InvoiceActionButtonsProps) {
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
        disableElevation
        onClick={onDownload}
        disabled={downloading}
        startIcon={
          downloading ? (
            <CircularProgress size={18} thickness={5} sx={{ color: '#10100F' }} />
          ) : (
            <FileDownloadOutlinedIcon />
          )
        }
        sx={{
          flex: { xs: '1 1 auto', sm: 1 },
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '0.95rem',
          py: 1.4,
          color: '#10100F',
          '&:hover': { backgroundColor: 'primary.light' },
          '&.Mui-disabled': {
            color: 'rgba(16,16,15,0.6)',
            backgroundColor: 'primary.main',
            opacity: 0.7,
          },
        }}
      >
        {downloading ? 'در حال آماده‌سازی...' : 'دانلود فاکتور'}
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

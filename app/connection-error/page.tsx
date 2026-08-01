'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import DnsIcon from '@mui/icons-material/Dns';
import RefreshIcon from '@mui/icons-material/Refresh';
import {  User } from '@/lib/auth';
import api, { ApiResponse } from '@/lib/api';
import Loading from '../Components/Loading/Loading';

export default function ConnectionErrorPage() {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const isNetwork = type === 'network';

  const handleRetry = async () => {
    setLoading(true);
    setFailed(false);

    try {
      const res = await api.get<ApiResponse<User>>('/accounts/profile/');

      if (res.status === 200) {
        const redirectTo =
          sessionStorage.getItem('redirectAfterReconnect') || '/';
        sessionStorage.removeItem('redirectAfterReconnect');
        window.location.href = redirectTo;
        return;
      }

      setFailed(true);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        px: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 440,
          width: '100%',
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'background.border',
        }}
      >
        <Stack spacing={2.5} alignItems="center">
          <Box
            sx={{
              width: { xs: 64, sm: 76 },
              height: { xs: 64, sm: 76 },
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: isDark ? 'rgba(252, 213, 53, 0.12)' : 'rgba(252, 213, 53, 0.15)',
              color: 'primary.main',
            }}
          >
            {isNetwork ? (
              <WifiOffIcon sx={{ fontSize: { xs: 30, sm: 36 } }} />
            ) : (
              <DnsIcon sx={{ fontSize: { xs: 30, sm: 36 } }} />
            )}
          </Box>

          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'text.title',
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
              }}
            >
              {isNetwork
                ? 'اتصال به اینترنت برقرار نیست'
                : 'سرور در حال حاضر در دسترس نیست'}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'text.subtitle',
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
              }}
            >
              {isNetwork
                ? 'لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.'
                : 'مشکلی در سمت سرور پیش آمده، لطفاً چند لحظه دیگر دوباره تلاش کنید.'}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleRetry}
            disabled={loading}
            disableElevation
            startIcon={
              loading ? (
                <Loading size={30} />
              ) : (
                <RefreshIcon />
              )
            }
            sx={{
              mt: 1,
              borderRadius: '8px',
              color: '#10100F',
              fontWeight: 600,
              py: 1.2,
              '&:hover': {
                bgcolor: 'primary.light',
              },
            }}
          >
            {loading ? 'در حال بررسی...' : 'تلاش مجدد'}
          </Button>

          {failed && (
            <Typography
              variant="caption"
              sx={{ color: isDark ? '#E57373' : '#D32F2F' }}
            >
              هنوز مشکل برطرف نشده است.
            </Typography>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
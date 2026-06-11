'use client';
import { Alert } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import * as React from 'react';
import { onSnackbar, SnackbarPayload } from './Snackbar';

export default function GlobalSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<SnackbarPayload>({
    message: '',
    color: 'error',
  });

  React.useEffect(() => {
    const unsubscribe = onSnackbar(({ message, color }) => {
      setSnackbar({ message, color });
      setOpen(true);
    });
    return unsubscribe;
  }, []);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <Alert
        severity={snackbar.color}
        variant="filled"
        sx={{
          width: '400px',
         bgcolor: snackbar.color === 'success'
  ? '#EAFFE7'
  : snackbar.color === 'error'
    ? '#FFEBEE'
    : '#FFE0B2',
          color: snackbar.color + '.dark',
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}

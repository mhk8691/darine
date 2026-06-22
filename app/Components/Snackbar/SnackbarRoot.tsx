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
      setSnackbar({
        message,
        color: color ?? 'error',
      });

      setOpen(true);
    });

    return unsubscribe;
  }, []);

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
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
        onClose={handleClose}
        severity={snackbar.color}
        variant="filled"
        sx={{ width: '400px' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
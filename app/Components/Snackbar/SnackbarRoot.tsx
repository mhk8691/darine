'use client';
import { Alert } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import * as React from 'react';
import { onSnackbar, SnackbarPayload } from './Snackbar';

export default function GlobalSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<SnackbarPayload>({
    message: '',
    type: false,
  });

  React.useEffect(() => {
    const unsubscribe = onSnackbar(({ message, type }) => {
      setSnackbar({ message, type });
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
        severity={snackbar.type ? 'success' : 'error'}
        variant="filled"
        sx={{
          width: '400px',
          bgcolor: snackbar.type ? '#EAFFE7' : 'error:light',
          color: snackbar.type ? '#33900E' : '',
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}

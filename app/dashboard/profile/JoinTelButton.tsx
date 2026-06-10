'use client';
import { CopyIcon, TelegramIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function JoinTelButton() {

  return (
    <Stack direction={'row'} gap={2} width={'100%'} mt={5}>
      <Button
      LinkComponent={Link}
      href='https://t.me/darine_app'
      target='_blank'
        variant="contained"
        color="primary"
        sx={{
          fontSize: {
            xs: 12,
            sm: 20,
          },
          py: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          width: '100%',
          borderRadius: 2,
        }}
      >
        <TelegramIcon />
        <Box component={'span'}>عضویت</Box>
      </Button>
     
    </Stack>
  );
}

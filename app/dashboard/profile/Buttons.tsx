'use client';
import { CopyIcon, TelegramIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { Box, Button, Stack } from '@mui/material';

export default function Buttons() {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText('https://t.me/talaseaBot?start=WOmMQhRxxr');
      showSnackbar('کپی شد', true);
    } catch (err) {
      console.error('failed to copy', err);
    }
  };
  return (
    <Stack direction={'row'} gap={2} width={'100%'} mt={5}>
      <Button
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
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          fontSize: {
            xs: 12,
            sm: 20,
          },
          px: 0,
          py: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          width: '100%',
          borderRadius: 2,
        }}
        onClick={handleClick}
      >
        <CopyIcon />

        <Box component={'span'}>کپی لینک</Box>
      </Button>
    </Stack>
  );
}

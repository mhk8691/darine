import React from 'react';
import PasswordField from '../PasswordField';
import { Stack, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import PasswordForm from './PasswordForm';
import Field from '../Field';
export default function page() {
  return (
    <>
      <PasswordForm />

      <Stack direction={'column'} gap={0.5} mt={4}>
        <Stack direction={'row'} gap={1}>
          <InfoOutlined sx={{ color: 'text.muted' }} />
          <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
            رمز عبور باید بین 6 تا 24 حرف باشد
          </Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <InfoOutlined sx={{ color: 'text.muted' }} />
          <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
            رمز باید شامل اعداد باشد
          </Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <InfoOutlined sx={{ color: 'text.muted' }} />
          <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
            رمز باید شامل حروف بزرگتر و کوچکتر باشد
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

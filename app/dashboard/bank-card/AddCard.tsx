'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { Button, IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';

import Field from '@/app/login/Field';
import { Close } from '@mui/icons-material';
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}
export default function AddCard({ setOpen, setValue, open, value }: Props) {
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      modalStyle={{
        px: 2,
        pb: 2,
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" fontSize={16}>
          افزودن کارت جدید
        </Typography>
        <IconButton onClick={() => setOpen(false)} disableRipple>
          <Close />
        </IconButton>
      </Stack>
      <Typography variant="body1" fontSize={14} sx={{ mt: 3 }}>
        شماره‌ی کارت بانکی خود را وارد کنید
      </Typography>
      <Field value={value} setValue={setValue} placeholder="شماره کارت جدید" />
      <Button
        variant="contained"
        color="primary"
        sx={{
          py: 1.4,
          fontSize: 16,
          borderRadius: 2,
          width: '100%',
          mt: 8,
          '&.Mui-disabled': {
            bgcolor: 'background.border',
          },
        }}
        disableRipple
        disabled
      >
        ثبت
      </Button>
    </CustomModal>
  );
}

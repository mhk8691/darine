'use client';
import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import AddAddress from './AddAddress';
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  description: string;
  cardStyle?: SxProps;
}
export default function ChooseAddress({ open, setOpen, description, cardStyle }: Props) {
  return (
    <Stack direction={'column'} alignItems={'center'} gap={2} sx={cardStyle}>
      <Stack
        component={'div'}
        onClick={() => setOpen(true)}
        sx={{ cursor: 'pointer' }}
        direction={'column'}
        alignItems={'center'}
        gap={2}
      >
        <Image src={'/images/location.svg'} alt="" width={77} height={77} />
        <Typography
          variant="body2"
          fontSize={{
            xs: 12,
            sm: 18,
          }}
          sx={{ color: 'text.secondary' }}
        >
          {description}
        </Typography>
      </Stack>
      {/* <AddressList setOpenAddAddress={setOpen} /> */}
      <AddAddress open={open} setOpen={setOpen} />
    </Stack>
  );
}

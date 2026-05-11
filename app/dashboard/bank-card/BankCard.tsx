'use client';
import Card from '@/app/Components/Containers/Container/Container';
import { IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import DeleteCard from './DeleteCard';
import { RemoveIcon } from '@/app/Components/CustomIcons/CustomIcons';

export default function BankCard() {
  const [cardId, setCardId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card style={{ px: 2, py: 3, borderColor: 'background.border' }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Image src={'/images/simple/mellat.svg'} alt={''} width={36} height={36} />
            <Typography variant="body2" fontSize={16} sx={{ color: 'text.muted' }}>
              بانک ملت
            </Typography>
          </Stack>
          <Stack>
            <IconButton
              disableRipple
              onClick={() => {
                setOpen(true);
                setCardId(1);
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Stack mt={2}>
          <Typography variant="body2" fontSize={18} sx={{ color: 'text.title' }}>
            ۶۱۰۴ ۱۲۳۴ ۵۶۷۸ ۹۱۱۱
          </Typography>
          <Typography variant="body2" fontSize={18} sx={{ color: 'text.title' }}>
            IR۸***۰۳۰۹۰۶۹۷۶55
          </Typography>
        </Stack>
      </Card>
      <DeleteCard open={open} setOpen={setOpen} cardId={cardId} setCardId={setCardId} />
    </>
  );
}

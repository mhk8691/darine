'use client';
import Card from '@/app/Components/Containers/Container/Container';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { RemoveIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { BankCardDataType } from '@/app/core/Types';
import RemoveCard from './RemoveCard';
import { getBankInfoWithSheba } from 'ir-banks-info';

export default function BankCard({
  bankCardData,
  setBankCardData,
}: {
  bankCardData: BankCardDataType[];
  setBankCardData: Dispatch<SetStateAction<BankCardDataType[]>>;
}) {
  const [cardId, setCardId] = useState<number>(0);

  const [open, setOpen] = useState(false);
  return (
    <>
      {bankCardData.map((item) => (
        <Grid
          key={item.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <Card style={{ px: 2, py: 3, borderColor: 'background.border' }}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Stack direction={'row'} gap={1} alignItems={'center'}>
                <Image src={getBankInfoWithSheba(item?.shaba_number)?.logo + '' || ''} alt={''} width={36} height={36} />
                <Typography variant="body2" fontSize={16} sx={{ color: 'text.muted' }}>
                  {getBankInfoWithSheba(item?.shaba_number)?.persianName}
                </Typography>
              </Stack>
              <Stack>
                <IconButton
                   
                  onClick={() => {
                    setOpen(true);
                    setCardId(item.id);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Stack mt={2}>
              <Typography variant="body2" fontSize={18} sx={{ color: 'text.title' }}>
                  محمد محمدی
              </Typography>
              <Typography variant="body2" fontSize={18} sx={{ color: 'text.title',mt:1.5 }}>
                 IR{item.shaba_number}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      ))}
      <RemoveCard
        open={open}
        setOpen={setOpen}
        cardId={cardId}
        setBankCardData={setBankCardData}
        setCardId={setCardId}
        bankCardData={bankCardData}
      />
    </>
  );
}

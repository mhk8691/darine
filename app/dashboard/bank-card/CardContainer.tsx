'use client';
import { Add as AddIcon } from '@mui/icons-material';
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import AddCard from './AddCard';
import BankCard from './BankCard';
import { BankCardDataType } from '@/app/core/Types';
import { getBankCard } from '@/lib/getbankCard/bankCard';
import Image from 'next/image';
export default function CardContainer() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [bankCardData, setBankCardData] = useState<BankCardDataType[]>([]);
  const theme = useTheme()
   const isDarkMode = theme.palette.mode === 'dark';
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardData(response && response?.length > 0 ? response : []);
    };
    getData();
  }, []);
  return (
    <>
      <Grid
        size={12}
        spacing={{
          xs: 2,
          sm: 1.5,
        }}
        container
      >
        {
          bankCardData.length > 0 ?<BankCard bankCardData={bankCardData} setBankCardData={setBankCardData} />:  <Stack
          mt={10}
          mb={8}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          gap={4}
        >
          <Image
            src={`/images/${isDarkMode ? 'emptyTableDark.png' : 'emptyTable.webp'}`}
            width={300}
            height={270}
            alt=""
          />
          <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
            کارت بانکی وجود ندارد
          </Typography>
        </Stack>
        }
      </Grid>
      <Button
        variant="contained"
        sx={{
          fontSize: 16,
          width: 'fit-content',
          borderRadius: 2,
          py: 1,
          fontWeight: 600,
          mt: {
            xs: 8,
            sm: 4,
          },
        }}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
      افزودن شماره شبا جدید
      </Button>
      <AddCard
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        setBankCardData={setBankCardData}
      />
    </>
  );
}

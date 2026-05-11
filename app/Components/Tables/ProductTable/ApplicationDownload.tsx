import React from 'react';
import Container from '../../Containers/Container/Container';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function ApplicationDownload() {
  return (
    <Container style={{ alignItems: 'center', height: '100%' }}>
      <Typography
        variant="body1"
        fontSize={{
          xs: 14,
          sm: 22,
        }}
        gutterBottom
      >
        دانلود اپلیکیشن
      </Typography>
      <Typography
        variant="body1"
        fontSize={{
          xs: 12,
          sm: 18,
        }}
        gutterBottom
        sx={{ mt: 2 }}
      >
        سرمایه‌گذاری امن و راحت با طلاسی
      </Typography>
      <Image alt="" src={'/images/application.webp'} width={'350'} height={350} />
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: '100%',
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 20,
          },
          py: 1.2,
        }}
      >
        دانلود اپلیکیشن دارینه
      </Button>
    </Container>
  );
}

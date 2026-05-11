'use client';
import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { certificate, installment } from './Footer';

export default function DesktopCertificate() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {isDesktop && (
        <Grid
          size={{
            xs: 6,
            xl: 4.5,
          }}
        >
          <Stack direction={'column'} gap={2.5}>
            <Stack direction={'column'} gap={0.7}>
              <Typography variant="body1" fontSize={14}>
                خرید قسطی
              </Typography>
              <Stack direction={'row'} gap={1.5} flexWrap="wrap">
                {installment.map((item, index) => (
                  <Stack
                    key={index}
                    border={1}
                    width="calc(25% - 12px)"
                    height={96}
                    borderRadius={2.5}
                    borderColor={'background.paper'}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      alt=""
                      src={item}
                      width={100}
                      height={100}
                      style={{
                        objectFit: 'contain',
                        width: '70%',
                        height: '55%',
                      }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack direction={'column'} gap={1}>
              <Typography variant="body1" fontSize={14}>
                مجوز ها
              </Typography>
              <Stack direction={'row'} gap={1.5} flexWrap="wrap">
                {certificate.map((item, index) => (
                  <Stack
                    key={index}
                    border={1}
                    width="calc(25% - 12px)"
                    height={96}
                    borderRadius={2.5}
                    borderColor={'background.paper'}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      alt=""
                      src={item}
                      width={100}
                      height={100}
                      style={{
                        objectFit: 'contain',
                        width: '70%',
                        height: '55%',
                      }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      )}
    </>
  );
}

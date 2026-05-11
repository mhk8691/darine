'use client';
import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export default function DesktopImage() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <>
      {isUpMd && (
        <Grid size={4}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Stack width={'100%'}>
              <Image
                alt=""
                width={417}
                height={185}
                src={`/images/${isDarkMode ? 'submitGiftCardDark' : 'submitGiftCard'}.webp`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      )}
    </>
  );
}

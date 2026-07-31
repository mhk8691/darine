'use client';

import { Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
interface Props{
  title:string
}
export default function EmptyMessage({title}:Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
<Stack
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
                    {title}
                    </Typography>
                    </Stack>

  );
}

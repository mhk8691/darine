'use client';

import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '../Components/CustomIcons/CustomIcons';

export default function BackLink({ title,fontSize }: { title?: string ,fontSize?:string}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  if (!isMobile && title) return null;
  return (
    <Stack
      direction={'row'}
      gap={1}
      alignItems={'center'}
      component={'div'}
      onClick={() => router.back()}
      sx={{
        cursor: 'pointer',
      }}
    >
      <ArrowLeftIcon fontSize={fontSize || '21'} />
      <Typography variant="body1" fontWeight={600} sx={{ color: 'text.title', mb: 0.5 }}>
        {title}
      </Typography>
    </Stack>
  );
}

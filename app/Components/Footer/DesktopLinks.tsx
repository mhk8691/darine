import { Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const aboutLink = [
  { title: 'درباره‌ ما', link: 'about-us' },
  { title: 'سوالات متداول', link: 'faq' },
  { title: 'اپلیکیشن دارینه', link: 'application' },
  { title: 'قوانین و مقررات', link: 'rules' },
];
export const contentLink = [
  { title: 'عیار طلا', link: '/' },
  { title: 'مظنه طلا', link: '/' },
  { title: 'استعلام کد طلا', link: '/' },
  { title: 'استعلام انگ طلای آب شده', link: '/' },
  { title: 'هر گرم طلا چند سوت است؟', link: '/' },
  { title: 'نمودار قیمت طلا در 10 سال گذشته', link: '/' },
  { title: 'آموزش پلتفرم', link: '/' },
  
];

export default function DesktopLinks() {
  return (
    <Grid
      size={6}
      display={'flex'}
      justifyContent={{
        xs: 'center',
        xl: 'flex-start',
      }}
    >
      <Stack direction={'row'} gap={8}>
        <Stack gap={2}>
          <Typography
            variant="body1"
            fontSize={14}
            fontWeight={500}
            sx={{ color: 'text.secondary' }}
          >
            درباره دارینه
          </Typography>
          <Stack direction={'column'} gap={1.5}>
            {aboutLink.map((item) => (
              <Link href={`/${item.link}`} key={item.title} prefetch={false}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={400}
                  key={item.link}
                  sx={{ color: 'text.secondary' }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack gap={2}>
          <Typography
            variant="body1"
            fontSize={14}
            fontWeight={500}
            sx={{ color: 'text.secondary' }}
          >
            مطالب مفید
          </Typography>
          <Stack direction={'column'} gap={1.5}>
            {contentLink.map((item) => (
              <Link href={item.link} key={item.title} prefetch={false}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={400}
                  key={item.link}
                  sx={{ color: 'text.secondary' }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}

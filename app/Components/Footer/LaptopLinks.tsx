'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { CollapseIcon, ExpandIcon } from '../CustomIcons/CustomIcons';

const items = [
  {
    id: '1',
    title: 'درباره دارینه',
    items: [
      { title: 'درباره‌ ما', link: '/about-us' },
      { title: 'سوالات متداول', link: '/faq' },
      { title: 'اپلیکیشن دارینه', link: '/application' },
      { title: 'قوانین و مقررات', link: '/rules' },
    ],
  },
  {
    id: '2',
    title: 'مطالب مفید',
    items: [
      { title: 'عیار طلا', link: '/' },
      { title: 'مظنه طلا', link: '/' },
      { title: 'استعلام کد طلا', link: '/' },
      { title: 'استعلام انگ طلای آب شده', link: '/' },
      { title: 'هر گرم طلا چند سوت است؟', link: '/' },
      { title: 'نمودار قیمت طلا در 10 سال گذشته', link: '/' },
    ],
  },

];

export default function LaptopLinks() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };
  return (
    <Grid size={12} mt={2}>
      <Stack>
        {items.map((item) => {
          const isOpen = expanded === item.id;

          return (
            <React.Fragment key={item.id}>
              <Accordion
                key={item.id}
                expanded={isOpen}
                onChange={handleChange(item.id)}
                sx={{
                  background:'transparent',
                  py: 1,
                  borderRadius: '10px !important',
                  boxShadow: 'none',
                  '&::before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    isOpen ? (
                      <SvgIcon
                        sx={{
                          fontSize: 25,
                          color: 'text.subtitle',
                        }}
                      >
                        <CollapseIcon />
                      </SvgIcon>
                    ) : (
                      <SvgIcon
                        sx={{
                          fontSize: 25,
                          color: 'text.subtitle',
                        }}
                      >
                        <ExpandIcon />
                      </SvgIcon>
                    )
                  }
                >
                  <Typography variant="body1">{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  {item.items.map((link) => (
                    <Link href={link.link} key={link.title}>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1,
                          whiteSpace: 'preLine',
                          lineHeight: '25px',
                          fontSize: {
                            xs: 12,
                            sm: 14,
                          },
                        }}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </AccordionDetails>
              </Accordion>
            </React.Fragment>
          );
        })}
      </Stack>
    </Grid>
  );
}

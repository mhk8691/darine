'use client';
import { FaqItem } from '@/app/core/Types';
import { Divider, Stack, SvgIcon, SxProps } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { JSX, useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '../CustomIcons/CustomIcons';

interface Props {
  faqData: FaqItem[];
  titleStyle?: SxProps;
}

export default function Faq({ faqData, titleStyle }: Props): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>('1');

  const handleChange = (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <Stack>
      <Typography
        variant="h5"
        fontSize={{
          xs: 16,
          sm: 22,
        }}
        sx={{ mb: 3, fontWeight: 'bold', ...titleStyle }}
        color="text.title"
      >
        سوالات متداول
      </Typography>
      {faqData.map((item) => {
        const isOpen = expanded === item.id;

        return (
          <Accordion
            key={item.id}
            expanded={isOpen}
            onChange={handleChange(item.id)}
            sx={{
              bgcolor: 'background.default',
              boxShadow: 'none',
              mb: 1.5,
              py: {
                xs: 0.5,
                sm: 2.2,
              },
              px: {
                xs: 0.5,
                sm: 2,
              },
              borderRadius: '10px !important',

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
                      fontSize: {
                        xs: 24,
                        sm: 32,
                        md: 40,
                      },
                      color: 'text.muted',
                    }}
                  >
                    <MinusCircleIcon />
                  </SvgIcon>
                ) : (
                  <SvgIcon
                    sx={{
                      fontSize: {
                        xs: 24,
                        sm: 32,
                        md: 40,
                      },
                      color: 'text.muted',
                    }}
                  >
                    <PlusCircleIcon />
                  </SvgIcon>
                )
              }
            >
              <Typography
                variant="h6"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  md: 18,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Divider />
              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  whiteSpace: 'pre-line',
                  lineHeight: '25px',
                  fontSize: {
                    xs: 12,
                    sm: 14,
                  },
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
}

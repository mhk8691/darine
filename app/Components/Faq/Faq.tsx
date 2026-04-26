"use client";
import { FaqItem } from "@/app/core/Types";
import { Divider, Stack, SvgIcon, SxProps } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { JSX, useState } from "react";

interface Props {
  faqData: FaqItem[];
  titleStyle?: SxProps;
}

export default function Faq({ faqData, titleStyle }: Props): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>("1");

  const handleChange =
    (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
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
        sx={{ mb: 3, fontWeight: "bold", ...titleStyle }}
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
              bgcolor: "#10100F",
              mb: 1.5,
              py: {
                xs: .5,
                sm: 2.2,
              },
              px: {
                xs: .5,
                sm: 2,
              },
              borderRadius: "10px !important",

              "&::before": {
                display: "none",
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
                      color: "#C2C2BA",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 12h9"
                        strokeWidth="1.5"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </SvgIcon>
                ) : (
                  <SvgIcon
                    sx={{
                      fontSize: {
                        xs: 24,
                        sm: 32,
                        md: 40,
                      },
                      color: "#C2C2BA",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="11.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 7.5v9M7.5 12h9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
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
                  whiteSpace: "pre-line",
                  lineHeight: "25px",
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

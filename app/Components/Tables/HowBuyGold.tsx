"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  SvgIcon,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "../Container/Container";
import "./video-style.css";
export default function HowBuyGold() {
  return (
    <Container
      style={{
        alignItems: "center",
        height: "100%",
        pb: {
          xs: 3,
          md: 0,
        },
        px: {
          xs: 0,
          sm: 4,
        },
      }}
    >
      <Typography
        variant="body1"
        fontSize={{
          xs: 16,
          sm: 22,
        }}
        gutterBottom
        sx={{ mb: 5 }}
      >
        چطور طلا بخریم؟
      </Typography>

      <Box
        className="h_iframe-aparat_embed_frame"
        position={"relative"}
        mb={2}
        width={{
          xs: "250px",
          sm: "100%",
        }}
      >
        <Stack
          position={"absolute"}
          bgcolor={"#1A1A18"}
          width={{
            xs: "110%",
            sm: "110%",
          }}
          height={"100%"}
          borderRadius={2}
          left={"50%"}
          sx={{ transform: "translateX(-50%) rotate(-8deg)" }}
        ></Stack>
        <span className="ratio"></span>
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/vrxuftp/vt/frame"
          allowFullScreen
          title="آموزش خرید طلا از طلاسی"
        />
      </Box>
      <Stack width={"100%"} mt={2}>
        <Accordion
          sx={{
            background: "rgb(16, 16, 15)",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SvgIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="10" fill="#1C1C1A"></circle>
                <path
                  d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z"
                  fill="#FCD535"
                ></path>
              </svg>
            </SvgIcon>
            <Typography
              variant="body2"
              fontSize={{
                xs: 14,
                sm: 18,
              }}
              sx={{ ml: 1 }}
            >
              ثبت نام و احراز هویت
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              py: 0,
              fontSize: {
                xs: 12,
                sm: 16,
              },
            }}
          >
            احراز هویت با شماره تلفن و کدملی به صورت آنی
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(16, 16, 15)",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SvgIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="10" fill="#1C1C1A"></circle>
                <path
                  d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z"
                  fill="#FCD535"
                ></path>
              </svg>
            </SvgIcon>
            <Typography
              variant="body2"
              fontSize={{
                xs: 14,
                sm: 18,
              }}
              sx={{ ml: 1 }}
            >
              خرید و فروش طلا
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              py: 0,
              fontSize: {
                xs: 12,
                sm: 16,
              },
            }}
          >
            خرید و فروش طلا آنلاین از ۱۰۰ هزار تومان
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(16, 16, 15)",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SvgIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="10" fill="#1C1C1A"></circle>
                <path
                  d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z"
                  fill="#FCD535"
                ></path>
              </svg>
            </SvgIcon>
            <Typography
              variant="body2"
              fontSize={{
                xs: 14,
                sm: 18,
              }}
              sx={{ ml: 1 }}
            >
              تحویل فیزیکی طلا
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              py: 0,
              fontSize: {
                xs: 12,
                sm: 16,
              },
            }}
          >
            دریافت حضوری و سریع طلا به صورت شمش ۱۸ یا ۲۴ عیار
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Container>
  );
}

"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "../Container/Container";
import { DoneIcon } from "../CustomIcons/CustomIcons";
import "./video-style.css";
export default function HowBuyGold() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Container
      style={{
        alignItems: "center",
        height: "100%",
        pb: {
          xs: 3,
          md: 2,
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
            background: isDarkMode ? "rgb(16, 16, 15)" : "#FFFFFF",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <DoneIcon />
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
            background: isDarkMode ? "rgb(16, 16, 15)" : "#FFFFFF",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <DoneIcon />
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
            background: isDarkMode ? "rgb(16, 16, 15)" : "#FFFFFF",
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <DoneIcon />
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

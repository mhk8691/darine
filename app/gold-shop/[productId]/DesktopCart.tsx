"use client";
import Container from "@/app/Components/Container/Container";
import priceFormater from "@/app/core/PriceFormater";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function DesktopCart() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  if (!isUpMd) return null;
  return (
    <Container style={{ px: 0, borderColor: "background.border", width: "100%" }}>
      <Stack direction={"column"} gap={1} alignItems={"center"} px={1.5}>
        <Stack sx={{ mt: 0.3 }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8307 7.49996C15.8307 8.70829 15.4724 9.81664 14.8557 10.7416C13.9557 12.075 12.5307 13.0166 10.8724 13.2583C10.5891 13.3083 10.2974 13.3333 9.9974 13.3333C9.6974 13.3333 9.40573 13.3083 9.1224 13.2583C7.46406 13.0166 6.03906 12.075 5.13906 10.7416C4.5224 9.81664 4.16406 8.70829 4.16406 7.49996C4.16406 4.27496 6.7724 1.66663 9.9974 1.66663C13.2224 1.66663 15.8307 4.27496 15.8307 7.49996Z"
              stroke="#C2C2BA"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.7073 15.3917L16.3323 15.7167C16.0239 15.7917 15.7823 16.025 15.7156 16.3333L15.4239 17.5583C15.2656 18.225 14.4156 18.425 13.9739 17.9L9.99893 13.3333L6.02393 17.9083C5.58226 18.4333 4.73226 18.2333 4.57393 17.5667L4.28226 16.3417C4.20726 16.0333 3.96559 15.7917 3.66559 15.725L2.29059 15.4C1.65726 15.25 1.43226 14.4583 1.89059 14L5.14059 10.75C6.04059 12.0833 7.46559 13.025 9.12393 13.2667C9.40726 13.3167 9.69893 13.3417 9.99893 13.3417C10.2989 13.3417 10.5906 13.3167 10.8739 13.2667C12.5323 13.025 13.9573 12.0833 14.8573 10.75L18.1073 14C18.5656 14.45 18.3406 15.2417 17.7073 15.3917Z"
              stroke="#C2C2BA"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10.4875 4.98337L10.9792 5.9667C11.0459 6.10003 11.2209 6.23337 11.3792 6.25837L12.2709 6.40837C12.8375 6.50003 12.9709 6.91671 12.5625 7.32504L11.8709 8.01669C11.7542 8.13336 11.6875 8.35837 11.7292 8.52504L11.9292 9.38337C12.0875 10.0584 11.7292 10.325 11.1292 9.96669L10.2959 9.47503C10.1459 9.38336 9.89588 9.38336 9.74588 9.47503L8.91254 9.96669C8.31254 10.3167 7.95421 10.0584 8.11254 9.38337L8.31254 8.52504C8.34588 8.36671 8.28754 8.13336 8.17088 8.01669L7.47921 7.32504C7.07088 6.91671 7.20421 6.50837 7.77088 6.40837L8.66254 6.25837C8.81254 6.23337 8.98754 6.10003 9.05421 5.9667L9.54588 4.98337C9.78754 4.45004 10.2209 4.45004 10.4875 4.98337Z"
              stroke="#C2C2BA"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Stack>
        <Typography variant="body1" fontSize={14} sx={{ color: "text.muted" }}>
          همه محصولات دارای ضمانت اصالت و سلامت کالا می‌باشند.
        </Typography>
      </Stack>
      <Stack direction={"column"} gap={2} mt={6} px={1.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontSize={14}>
            قیمت:
          </Typography>
          <Typography
            variant="body1"
            fontSize={22}
            sx={{ color: "text.title" }}
          >
            {priceFormater(19303549)}{" "}
            <Box component={"span"} fontSize={16}>
              تومان
            </Box>
          </Typography>
        </Stack>
      </Stack>
      <Stack px={1.5}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: 16,
            py: 1.5,
            fontWeight: "600",
            borderRadius: 2,
            mt: 4,
          }}
        >
          افزودن به سبد خرید
        </Button>
      </Stack>
    </Container>
  );
}

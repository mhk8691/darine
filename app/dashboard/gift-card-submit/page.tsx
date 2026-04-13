import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";

export default function page() {
  return (
    <Grid container>
      <Grid
        size={12}
        bgcolor={"background.default"}
        border={1}
        borderColor={"background.paper"}
        borderRadius={2.5}
        direction={"row"}
        alignItems={"center"}
        px={7}
        py={3}
        container
        spacing={12}
        pb={8}
      >
        <Grid size={8}>
          <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
            ثبت کد کارت هدیه
          </Typography>
          <Typography
            variant="h6"
            fontSize={16}
            sx={{ color: "text.secondary", mt: 4.5 }}
          >
            با وارد کردن شماره سریال کارت هدیه، طلای هدیه‌تان فعال می‌شود. اگر
            مقدار طلا به حد برداشت فیزیکی برسد، می‌توانید آن را به‌صورت شمش یا
            سکه تحویل بگیرید. در غیر این صورت، معادل ریالی آن قابل برداشت است.
          </Typography>
          <Typography variant="h6" fontSize={18} sx={{ mt: 6 }}>
            لطفا شماره سریال کارت هدیه را وارد کنید.
          </Typography>
          <Form />
        </Grid>
        <Grid size={4}>
          <Image
            src={"/images/submitGiftCardDark.webp"}
            alt=""
            width={"320"}
            height={"321"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

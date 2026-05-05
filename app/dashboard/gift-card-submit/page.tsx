import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import BackLink from "../BackLink";
import DesktopImage from "./DesktopImage";
import Form from "./Form";
import LaptopImage from "./LaptopImage";
export const metadata: Metadata = {
  title: "دریافت کارت هدیه | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 4,
        sm: 1,
        lg: 3,
      }}
    >
      {" "}
      <BackLink title="ثبت کد کارت هدیه" />
      <Grid
        size={12}
        bgcolor={"background.default"}
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: "background.paper",
        }}
        borderRadius={2.5}
        direction={"row"}
        alignItems={"center"}
        px={{
          xs: 0,
          sm: 7,
        }}
        py={{
          xs: 0,
          sm: 3,
        }}
        container
        spacing={12}
        pb={{
          xs: 0,
          sm: 8,
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
            sx={{
              color: "text.title",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            ثبت کد کارت هدیه
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            sx={{
              color: "text.secondary",
              mt: {
                xs: 2,
                sm: 1,
                md: 4.5,
              },
            }}
          >
            با وارد کردن شماره سریال کارت هدیه، طلای هدیه‌تان فعال می‌شود. اگر
            مقدار طلا به حد برداشت فیزیکی برسد، می‌توانید آن را به‌صورت شمش یا
            سکه تحویل بگیرید. در غیر این صورت، معادل ریالی آن قابل برداشت است.
          </Typography>
          <LaptopImage />
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
            sx={{
              mt: {
                xs: 3,
                md: 6,
              },
            }}
          >
            لطفا شماره سریال کارت هدیه را وارد کنید.
          </Typography>
          <Form />
        </Grid>
        <DesktopImage />
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="کارت هدیه های شما"
          toggleItems={[]}
          type="chip"
          emptyMessage="کارت هدیه‌ای برای شما به ثبت نرسیده است"
        />
      </Grid>
    </Grid>
  );
}

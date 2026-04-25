import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import { Metadata } from "next";
import DesktopImage from "./DesktopImage";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
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
            sx={{ color: "text.title" }}
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
          <DesktopImage />
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
        <Grid
          size={4}
          display={{
            xs: "none",
            sm: "block",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Stack width={"100%"}>
              <Image
                alt=""
                width={417}
                height={185}
                src={"/images/submitGiftCardDark.webp"}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Stack>
          </Stack>
       
        </Grid>
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

"use client";
import Container from "@/app/Components/Container/Container";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Transaction from "./Transaction";
import { useState } from "react";

export default function TransactionContainer() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4.8,
        }}
        order={{
          xs: 2,
          md: 1,
        }}
      >
        <Transaction setValue={setValue} />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Container
          style={{
            color: "#EF8011",
            px: {
              xs: 2,
              sm: 4,
            },
            py: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          {value === 0 ? (
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: "text.secondary", mt: "10px" }}
            >
              واریز ریالی فقط از حساب بانکی به نام خودتان امکان‌پذیر است. در غیر
              این صورت، مبلغ در حالت انتظار قرار می‌گیرد و پس از پیگیری شما، طی
              ۳ روز کاری به حساب شما باز می‌گردد.
            </Typography>
          ) : (
            <Box component={"ul"} px={3}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={"li"}
                sx={{ color: "text.secondary", mt: "10px" }}
              >
                برداشت ریالی فقط به کارت‌های ثبت شده امکان‌پذیر است.
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={"li"}
                sx={{ color: "text.secondary", mt: "10px" }}
              >
                کاربر گرامی به دلیل شرایط پیش آمده و محدودیت اعلامی از سمت بانک
                مرکزی، سامانه پایا به یک سیکل در روز (ساعت 15) کاهش یافته و
                تسویه برداشت ها ممکن است زمانبر شود .
              </Typography>
            </Box>
          )}
        </Container>
      </Grid>
    </>
  );
}

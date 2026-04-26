"use client";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Container from "../Components/Container/Container";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import InputField from "../Components/InputField/InputField";
import { useState } from "react";

export default function RequestForm() {
  const [name, setName] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [numberCard, setNumberCard] = useState<number | null>(null);
  const [gold, setGold] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const inputList = [
    {
      placeholder: "نام سازمان سفارش دهنده",
      value: name,
      setValue: setName,
    },
    {
      placeholder: "شناسه ملی شرکت",
      value: id,
      setValue: setId,
    },
    {
      placeholder: "نام و نام خانوادگی درخواست دهنده",
      value: lastName,
      setValue: setLastName,
    },
    {
      placeholder: "شماره همراه",
      value: phoneNumber,
      setValue: setPhoneNumber,
    },
    {
      placeholder: "تعداد کارت درخواستی",
      value: numberCard,
      setValue: setNumberCard,
    },
    {
      placeholder: "طلای درخواستی برای هر کارت هدیه",
      value: gold,
      setValue: setGold,
    },
    {
      placeholder: "توضیحات تکمیلی",
      value: description,
      setValue: setDescription,
    },
  ];
  return (
    <Grid
      container
      spacing={{
        xs: 3,
        sm: 9,
      }}
    >
      <Grid size={12}>
        <Typography
          variant="h1"
          fontSize={{
            xs: 16,
            sm: 30,
          }}
          fontWeight={"700"}
          sx={{ color: "text.title", textAlign: "center" }}
        >
          فرم درخواست کارت هدیه سازمانی طلاسی
        </Typography>
      </Grid>
      <Grid size={12}>
        <Container
          style={{
            background: "rgb(28, 28, 27)",
            px: {
              xs: 2,
              sm: 10,
              md: 5,
              lg: 14,
            },
            py: {
              xs: 2,
              sm: 5.5,
            },
            pb:{
              xs:6,
              sm:5.5
            }
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 14,
              sm: 22,
            }}
          >
            با استفاده از فرم زیر درخواست خود را برای ما ارسال کنید.
          </Typography>
          <Stack
            bgcolor={"#32281B"}
            direction={"row"}
            alignItems={"flex-start"}
            gap={1}
            p={{
              xs: 2,
              sm: 3,
            }}
            borderRadius={3}
            mt={3}
          >
            <InfoOutlinedIcon sx={{ color: "#F69622" }} />
            <Typography variant="h6" fontSize={16} sx={{ color: "#F69622" }}>
              در صورت درخواست کارت هدیه سازمانی طلاسی، فقط درخواست‌های سازمانی
              را ثبت کنید. اگر کاربر حقیقی هستید، لطفاً برای درخواست کارت هدیه
              از صفحه{" "}
              <Link
                href={"/dashboard/gift-card-menu"}
                style={{
                  color: "#275CFF",
                }}
              >
                خرید کارت هدیه
              </Link>{" "}
              ادامه دهید.
            </Typography>
          </Stack>
          <Grid size={12} container spacing={3} mt={5}>
            {inputList.map((item) => (
              <Grid
                size={{
                  xs: 12,
                  md: item.placeholder === "توضیحات تکمیلی" ? 12 : 6,
                }}
                key={item.placeholder}
              >
                <InputField
                  placeholder={item.placeholder}
                  value={item.value}
                  setValue={item.setValue}
                  style={{
                    width: "100%",
                    bgcolor: "#10100F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#393936",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#393936",
                        borderWidth: "1px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#393936",
                        borderWidth: "1px",
                      },
                      "&.Mui-disabled fieldset": {
                        borderColor: "#393936",
                        borderWidth: "1px",
                      },
                    },
                  }}
                  title={
                    item.placeholder === "طلای درخواستی برای هر کارت هدیه"
                      ? "گرم"
                      : ""
                  }
                />
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: {
                  xs: 12,
                  sm: 18,
                },
                borderRadius: 2,
                py: 1.5,
                width: {
                  xs: "30%",
                  sm: "45%",
                  md: "30%",
                  lg: "25%",
                },
                mt: 2,
              }}
            >
              ثبت درخواست
            </Button>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

"use client";
import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ActionButton from "../SubmitButton";
import Field from "../Field";

export default function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={"500"}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: "text.title" }}
      >
        اطلاعات کاربری
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ color: "text.secondary", mt: 3 }}
      >
        اطلاعات زیر را با توجه به صاحب شماره 09961250980 وارد کنید
      </Typography>

      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Field
            value={phoneNumber}
            setValue={setPhoneNumber}
            label="شماره موبایل"
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Field value={birthDay} setValue={setBirthDay} label="روز تولد" />
          </Grid>
          <Grid size={4}>
            <Field
              value={birthMonth}
              setValue={setBirthMonth}
              label="ماه تولد"
            />
          </Grid>
          <Grid size={4}>
            <Field value={birthYear} setValue={setBirthYear} label="سال تولد" />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Field
            value={cardNumber}
            setValue={setCardNumber}
            label="شماره کارت"
          />
        </Grid>
        <Grid size={12}>
          <Field
            value={inviteCode}
            setValue={setInviteCode}
            label="کد معرف (اختیاری)"
          />
        </Grid>
      </Grid>

      <ActionButton title={"ورود"} />
    </Stack>
  );
}

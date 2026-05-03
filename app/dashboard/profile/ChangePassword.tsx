"use client";
import CustomModal from "@/app/Components/CustomModal/CustomModal";
import Field from "@/app/login/Field";
import { Close } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function ChangePassword() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 0.5,
          px: 2,
          borderRadius: "7px",
          color: "text.primary",
          width: "fit-content",
          mt: 5,
        }}
        onClick={() => setOpen(true)}
      >
        تنظیم یا تغییر رمز ورود
      </Button>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ py: 3, px: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontSize={16}>
            فراموشی رمز عبور
          </Typography>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={16} sx={{ my: 3 }}>
          به منظور تغییر رمزعبور باید کدی به شماره موبایل شما ارسال شود.
        </Typography>
        <Field setValue={setValue} value={value} label="شماره موبایل شما" />
        {/* 
        <PasswordField password={value} setPassword={setValue} />
        <PasswordField password={value} setPassword={setValue} label="تایید رمز عبور" />
        
        <Stack direction={"column"} gap={.5} mt={4}>
          <Stack direction={"row"} gap={1}>
            <InfoOutlinedIcon sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز عبور باید بین 6 تا 24 حرف باشد
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <InfoOutlinedIcon sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز باید شامل اعداد باشد
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <InfoOutlinedIcon sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز باید شامل حروف بزرگتر و کوچکتر باشد
            </Typography>
          </Stack>
        </Stack> */}
        {/* <Field setValue={setValue} value={value} label="کد تایید" /> */}
        <Button
          variant="contained"
          color="primary"
          disableRipple
          sx={{
            py: 1.3,
            fontSize: 22,
            width: "100%",
            borderRadius: 2,
            mt: 6,
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          ارسال کد
        </Button>
      </CustomModal>
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import DesktopCart from "./DesktopCart";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Delivery from "./Delivery";
import CustomModal from "../Components/CustomModal/CustomModal";
import { Close } from "@mui/icons-material";
import OrderConfirmation from "./OrderConfirmation";

export default function Cart() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleIncrease = () => {
    setStep((prev) => {
      if (prev === 1) {
        setOpen(true);
      } else {
        return prev < 1 ? prev + 1 : 0;
      }
      return prev;
    });
  };
  const handleDecrease = () => {
    if (step === 0) {
      router.push("/gold-shop");
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <>
      {step === 0 && (
        <>
          <Typography
            variant="h6"
            fontSize={30}
            fontWeight={"500"}
            sx={{ color: "text.title" }}
          >
            سبد خرید شما
          </Typography>
          <DesktopCart />
        </>
      )}
      {step === 1 && <Delivery />}
      <Stack
        width={step === 0 ? "50%" : "62%"}
        mt={3}
        direction={"row"}
        gap={2}
      >
        <Button
          variant="contained"
          color="primary"
          disableRipple
          sx={{
            fontSize: 20,
            py: 1.3,
            borderRadius: 2,
            width: "70%",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
          onClick={handleIncrease}
        >
          {step === 0 ? "ادامه" : "ثبت سفارش"}
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          disableRipple
          sx={{
            fontSize: 20,
            py: 1.3,
            borderRadius: 2,
            width: "30%",
            "&:hover": {
              bgcolor: "background.default",
            },
          }}
          onClick={handleDecrease}
        >
          بازگشت
        </Button>
      </Stack>
      <CustomModal
        setOpen={setOpen}
        open={open}
        modalStyle={{
          height: "70%",
          px: 2,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontSize={16} fontWeight={500}>
            تایید سفارش
          </Typography>
          <IconButton
            onClick={() => {
              setStep(1);
              setOpen(false);
            }}
            disableRipple
          >
            <Close />
          </IconButton>
        </Stack>
        <Stack height={"90%"} overflow={"auto"} mt={1} pr={1} pb={4}>
          <OrderConfirmation setOpen={setOpen} />
        </Stack>
      </CustomModal>
    </>
  );
}

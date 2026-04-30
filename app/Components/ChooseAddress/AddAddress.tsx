"use client";
import CustomModal from "@/app/Components/CustomModal/CustomModal";
import { Close } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import ChooseCity from "./ChooseCity";
import NewAddress from "./NewAddress";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function AddAddress({ open, setOpen }: Props) {
  const [step, setStep] = useState(0);
  return (
    <>
      <CustomModal
        open={open}
        setOpen={setOpen}
        modalStyle={{ px: 1.5, pb: 2 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Typography variant="body1" fontSize={16} fontWeight={600}>
            {step === 0 && " انتخاب شهر"}
            {step === 1 && "موقعیت روی نقشه"}
            {step === 2 && "آدرس جدید"}
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            disableRipple
          >
            <Close />
          </IconButton>
        </Stack>
        {step === 0 && <ChooseCity />}
        {step === 1 && <Map />}
        {step === 2 && <NewAddress />}

        <Stack direction={"row"} gap={3} mt={3}>
          <Button
            variant="contained"
            color="primary"
            disableRipple
            onClick={() => setStep((prev) => (prev < 2 ? prev + 1 : 1))}
            sx={{
              borderRadius: 2,
              py: 1.3,
              fontSize: 16,
              width: step > 0 ? "50%" : "100%",
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
          >
            {step === 2 ? "ثبت آدرس" : "ادامه"}
          </Button>
          {step > 0 && (
            <Button
              variant="outlined"
              color="inherit"
              disableRipple
              onClick={() => setStep((prev) => prev - 1)}
              sx={{
                borderRadius: 2,
                py: 1.3,
                fontSize: 16,
                width: "50%",
                "&:hover": {
                  bgcolor: "background.default",
                },
              }}
            >
              بازگشت
            </Button>
          )}
        </Stack>
      </CustomModal>
    </>
  );
}

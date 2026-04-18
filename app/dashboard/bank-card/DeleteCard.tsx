import CustomModal from "@/app/Components/CustomModal/CustomModal";
import { Close } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardId: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
}
export default function DeleteCard({
  open,
  setOpen,
  cardId,
  setCardId,
}: Props) {
  return (
    <>
      <CustomModal
        open={open}
        setOpen={setOpen}
        modalStyle={{
          px: 2,
          pb: 2,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontSize={16} fontWeight={"500"}>
            حذف کارت
          </Typography>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography
          variant="body1"
          fontSize={15}
          fontWeight={"500"}
          sx={{ mt: 3 }}
        >
          آیا از حذف کارت بانکی با شماره 6104 3310 8629 2050 اطمینان دارید؟
        </Typography>
        <Stack direction={"row"} gap={2} mt={4}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              py: 1.4,
              fontSize: 16,
              borderRadius: 2,
              width: "50%",
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
            onClick={() => setOpen(false)}
            disableRipple
          >
            حذف
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              py: 1.4,
              fontSize: 16,
              borderRadius: 2,
              width: "50%",
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
            onClick={() => setOpen(false)}
            disableRipple
          >
            انصراف
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}

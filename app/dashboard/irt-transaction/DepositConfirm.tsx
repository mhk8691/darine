import Container from "@/app/Components/Containers/Container/Container";
import CustomModal from "@/app/Components/CustomModal/CustomModal";
import Loading from "@/app/Components/Loading/Loading";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { DepositDataType } from "@/app/core/Types";
import { getGoldDeposit } from "@/lib/transactions/deposit/deposit";
import { Close } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { isAxiosError } from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setDepositData: Dispatch<SetStateAction<DepositDataType | null>>;
    checked:boolean
  setChecked:Dispatch<SetStateAction<boolean>>
}
export default function DepositConfirm({
  open,
  setOpen,
  setDepositData,
  checked,
setChecked

}: Props) {
  
  const [isLoading,setIsLoading] = useState(false)
  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleClick = async () => {
   try{
    setIsLoading(true)
     const response = await getGoldDeposit();
      setDepositData(response.data || ({} as DepositDataType));
      showSnackbar(response.message,'success')
    setOpen(false)
   }
    catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }finally{
setIsLoading(false)
    }
  };
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      modalStyle={{
        p: 2,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="body1" fontSize={14} fontWeight={600}>
          هشدار مهم!
        </Typography>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
           
        >
          <Close />
        </IconButton>
      </Stack>
      <Container
        style={{
          px: 2,
          py: 1,
          mb: 2,
          mt: 2,
          
          borderColor:'background.paper'
        }}
      >
        <Typography variant="body1" fontSize={14} lineHeight={"25px"}>
          تنها در صورت ثبت شماره کارت حساب مبدأ، مبلغ واریزی در حساب شما شارژ
          خواهد شد.
        </Typography>
      </Container>
      <Container style={{ px: 2, py: 1, borderColor:'background.paper'}}>
        <Typography variant="body1" fontSize={14} lineHeight={"25px"}>
          واریز فقط به صورت پایا به شماره شبا قابل انجام است. در صورت استفاده از
          روش های واریزی دیگر (کارت به کارت، پل، حساب به حساب و ....) وجه واریزی
          در حساب شما منظور نمی گردد.
        </Typography>
      </Container>
      <Stack>
        <FormControlLabel
          label="هشدار های بالا را خوانده و قبول دارم."
          sx={{
            mt: 2,
            "&.MuiFormControlLabel-root .MuiTypography-root": {
              fontSize: 14,
            },
          }}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChangeBox}
               
              sx={{
                "&.Mui-checked": {
                  color: "primary.main",
                },
              }}
              slotProps={{
                input: { "aria-label": "controlled" },
              }}
            />
          }
        />
      </Stack>
      <Button
        variant="contained"
        onClick={handleClick}
        color="primary"
        disabled={!checked || isLoading}
        sx={{ width: "100%", height:60, fontSize: 16, mt: 2 }}
        
      >
        {isLoading ? <Loading size={30} />:'تایید'}
      </Button>
    </CustomModal>
  );
}

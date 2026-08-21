import Container from "@/app/Components/Containers/Container/Container";
import CustomModal from "@/app/Components/CustomModal/CustomModal";
import Loading from "@/app/Components/Loading/Loading";
import priceFormatter from "@/app/core/PriceFormater";
import { BankCardDataType } from "@/app/core/Types";
import { Close } from "@mui/icons-material";
import {
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import  { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleWithdraw: () => Promise<void>
  isLoading:boolean
  finalPrice:string
  isSilverWithdraw:boolean
    bankCardsData:BankCardDataType
}
export default function WithdrawConfirm({
  open,
  setOpen,
  handleWithdraw,
isLoading,
finalPrice,
isSilverWithdraw,
  bankCardsData

}: Props) {
  

 
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
        {isSilverWithdraw ? 'تایید برداشت به نقرینه' : 'تایید برداشت'}
        </Typography>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
           
        >
          <Close />
        </IconButton>
      </Stack>
      {
        !isSilverWithdraw && <Container
        style={{
          px: 2,
          py: 1,
          mb: 2,
          mt: 2,
          
          borderColor:'background.paper'
        }}
      >
        <Stack component={'ul'} ml={2}>
        <Typography component={'li'} variant="body1" fontSize={14} lineHeight={"25px"}>
         زمان تسویه برداشت‌های موفق: حداکثر ۲ روز کاری
        </Typography>
        <Typography component={'li'} variant="body1" fontSize={14} lineHeight={"25px"}>
        در صورت ناموفق و یا نامشخص بودن تراکنش، وضعیت آن حداکثر تا ۲۴ ساعت توسط بانک مشخص خواهد شد.
        </Typography>

        </Stack>
      </Container>
      }
      

        <Typography variant="body1" fontSize={14} fontWeight={'bold'} lineHeight={"25px"}>
       آیا از برداشت به مبلغ {priceFormatter(+finalPrice)} تومان به حساب {bankCardsData?.owner_full_name} اطمینان دارید؟
        </Typography>
  
     
      <Stack direction={'row'} gap={2} mt={3}>
        <Button
        variant="contained"
        onClick={handleWithdraw}
        color="primary"
        disabled={isLoading}
        sx={{ width: "50%", height:50,borderRadius:2, fontSize: 16, }}
        
      >
        {isLoading ? <Loading size={30} />:'تایید برداشت'}
      </Button>
      <Button
        variant="outlined"
        onClick={()=>setOpen(false)}
        color="primary"
        sx={{ width: "50%", height:50,borderRadius:2, fontSize: 16, }}
        
      >
        انصراف
      </Button>
      </Stack>
    </CustomModal>
  );
}

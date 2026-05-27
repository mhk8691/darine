'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import {  PriceAlertsDataType } from '@/app/core/Types';
import { getPriceAlerts, removePriceAlert } from '@/lib/priceAlert/priceAlert';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  priceAlertId: number;
  setPriceAlert: Dispatch<SetStateAction<PriceAlertsDataType[]>>;
  setPriceAlertId: Dispatch<SetStateAction<number>>;
  filter:string,date:DatePickerValue
}
export default function RemovePriceAlertModal({
  open,
  setOpen,
  priceAlertId,
  setPriceAlert,
  setPriceAlertId,
  filter,date
}: Props) {
  const [isLoading,setIsLoading] = useState(false)
  const handleRemove = async () => {
   try{
    setIsLoading(true)
     const res = await removePriceAlert(priceAlertId);
     showSnackbar(res.message,true)
    const response = await getPriceAlerts(filter,date);
    setPriceAlert([])
    setPriceAlert(response && response?.length > 0 ? response : []);
    setPriceAlertId(0);
    setOpen(false);
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
    <>
      <CustomModal
        open={open}
        setOpen={setOpen}
        modalStyle={{
          px: 2,
          pb: 2,
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={'500'}>
            حذف آلارم
          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={15} fontWeight={'500'} sx={{ mt: 3 }}>
          آیا از انجام این عمل اطمینان دارید؟
        </Typography>
        <Stack direction={'row'} gap={2} mt={4}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              height:60,
              fontSize: 16,
              borderRadius: 2,
              width: '50%',
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
            onClick={handleRemove}
             disabled={isLoading}
          >
            {isLoading ? <Loading size={30}/>:'حذف'}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              py: 1.4,
              fontSize: 16,
              borderRadius: 2,
              width: '50%',
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
            onClick={() => setOpen(false)}
             
          >
            انصراف
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}

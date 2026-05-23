'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { BankCardDataType, PriceAlertsDataType } from '@/app/core/Types';
import { getPriceAlerts, removePriceAlert } from '@/lib/priceAlert/priceAlert';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  priceAlertId: number;
  setPriceAlert: Dispatch<SetStateAction<PriceAlertsDataType[]>>;
  setPriceAlertId: Dispatch<SetStateAction<number>>;
}
export default function RemovePriceAlertModal({
  open,
  setOpen,
  priceAlertId,
  setPriceAlert,
  setPriceAlertId,
}: Props) {
  const handleRemove = async () => {
    await removePriceAlert(priceAlertId);
    const response = await getPriceAlerts();
    setPriceAlert(response && response?.length > 0 ? response : []);
    setPriceAlertId(0);
    setOpen(false);
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
              py: 1.4,
              fontSize: 16,
              borderRadius: 2,
              width: '50%',
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
            onClick={handleRemove}
             
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

import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { BankCardDataType } from '@/app/core/Types';
import { getBankCard, removeBankCard } from '@/lib/getbankCard/bankCard';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cardId: number;
  setBankCardData: Dispatch<SetStateAction<BankCardDataType[]>>;
  setCardId: Dispatch<SetStateAction<number>>;
  bankCardData: BankCardDataType[];
}
export default function RemoveCard({
  open,
  setOpen,
  cardId,
  setBankCardData,
  setCardId,
  bankCardData,
}: Props) {
  const handleRemove = async () => {
    await removeBankCard(cardId);
    const response = await getBankCard();
    setBankCardData(response && response?.length > 0 ? response : []);
    setCardId(0);
    setOpen(false);
  };
  const selectedCard = bankCardData?.find((item) => item.id === cardId);
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
            حذف کارت
          </Typography>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={15} fontWeight={'500'} sx={{ mt: 3 }}>
          آیا از حذف کارت بانکی با شماره {selectedCard?.card_number} اطمینان دارید؟
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
              width: '50%',
              '&:hover': {
                bgcolor: 'background.default',
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

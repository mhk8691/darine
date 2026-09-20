'use client';

import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { isAxiosError } from 'axios';
import ChooseCity from './ChooseCity';
import NewAddress from './NewAddress';
import { showSnackbar } from '../Snackbar/Snackbar';
import { addAddresses } from '@/lib/giftCard/giftCard';
import { AddressesDataType } from '@/app/core/Types';

type StringSetter = Dispatch<SetStateAction<string>>;

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setActiveStep?: Dispatch<SetStateAction<number>>;
  getData: () => Promise<void>;
  address: string;
  setAddress: StringSetter;
  province: string;
  setProvince: StringSetter;
  city: string;
  setCity: StringSetter;
  plaque: string;
  setPlaque: StringSetter;
  unit: string;
  setUnit: StringSetter;
  postCode: string;
  setPostCode: StringSetter;
  setAddressId: Dispatch<SetStateAction<number>>;
  setTalaseaCityId: Dispatch<SetStateAction<number>>;
}

export default function AddAddress({
  open,
  setOpen,
  setActiveStep,
  getData,
  address,
  setAddress,
  province,
  setProvince,
  city,
  setCity,
  plaque,
  setPlaque,
  unit,
  setUnit,
  postCode,
  setPostCode,
  setAddressId,
  setTalaseaCityId
}: Props) {
  const [step, setStep] = useState(0);

  const resetFields = () => {
    setAddress('');
    setProvince('');
    setCity('');
    setPlaque('');
    setUnit('');
    setPostCode('');
    setStep(0);
  };

  const handleAddress = async () => {
    const newAddress: AddressesDataType = {
      address,
      city,
      plaque,
      postal_code: postCode,
      province,
      unit,
    };

    try {
      const response = await addAddresses(newAddress);
      await getData();
      showSnackbar(response.message, 'success');
      setAddressId(response.data.id || 0);
      setTalaseaCityId(Number(response.data.city || 0));
      resetFields();
      setActiveStep?.(2);
      setOpen(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ px: 1.5, pb: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="body1" fontSize={16} fontWeight={600}>
          {step === 0 && 'انتخاب شهر'}
          {step === 1 && 'آدرس جدید'}
        </Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Stack>

      {step === 0 && (
        <ChooseCity city={city} setCity={setCity} province={province} setProvince={setProvince} />
      )}
      {step === 1 && (
        <NewAddress
          address={address}
          setAddress={setAddress}
          plaque={plaque}
          setPlaque={setPlaque}
          unit={unit}
          setUnit={setUnit}
          postCode={postCode}
          setPostCode={setPostCode}
        />
      )}

      <Stack direction="row" gap={3} mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (step < 1 ? setStep((prev) => prev + 1) : handleAddress())}
          sx={{
            borderRadius: 2,
            py: 1.3,
            fontSize: 16,
            width: step > 0 ? '50%' : '100%',
          }}
        >
          {step === 1 ? 'ثبت آدرس' : 'ادامه'}
        </Button>
        {step > 0 && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setStep((prev) => prev - 1)}
            sx={{
              borderRadius: 2,
              py: 1.3,
              fontSize: 16,
              width: '50%',
              color: 'text.title',
            }}
          >
            بازگشت
          </Button>
        )}
      </Stack>
    </CustomModal>
  );
}

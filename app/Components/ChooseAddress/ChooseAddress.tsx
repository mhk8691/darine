'use client';

import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import AddAddress from './AddAddress';
import AddressList from './AddressList';
import { showSnackbar } from '../Snackbar/Snackbar';
import { getAddresses } from '@/lib/giftCard/giftCard';
import { AddressesDataType } from '@/app/core/Types';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  description: string;
  cardStyle?: SxProps;
  addressId: number;
  setAddressId: Dispatch<SetStateAction<number>>;
  setTalaseaCityId: Dispatch<SetStateAction<number>>;
  setActiveStep?: Dispatch<SetStateAction<number>>;
  addresses: AddressesDataType[];
  setAddresses: Dispatch<SetStateAction<AddressesDataType[]>>;
}

export default function ChooseAddress({
  addressId,
  setAddressId,
  setTalaseaCityId,
  open,
  setOpen,
  description,
  cardStyle,
  setActiveStep,
  addresses,
  setAddresses,
}: Props) {
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [plaque, setPlaque] = useState('');
  const [unit, setUnit] = useState('');
  const [postCode, setPostCode] = useState('');

  const getData = async () => {
    try {
      const response = await getAddresses();
      setAddresses(response);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack direction="column" alignItems="center" gap={2} sx={cardStyle}>
      {addresses?.length > 0 ? (
        <AddressList
          setOpenAddAddress={setOpen}
          addresses={addresses}
          addressId={addressId}
          setAddressId={setAddressId}
          setTalaseaCityId={setTalaseaCityId}
        />
      ) : (
        <Stack
          component="div"
          onClick={() => setOpen(true)}
          sx={{ cursor: 'pointer' }}
          direction="column"
          alignItems="center"
          gap={2}
        >
          <Image src="/images/location.svg" alt="" width={77} height={77} />
          <Typography
            variant="body2"
            fontSize={{ xs: 12, sm: 18 }}
            sx={{ color: 'text.secondary' }}
          >
            {description}
          </Typography>
        </Stack>
      )}

      <AddAddress
        open={open}
        setOpen={setOpen}
        setActiveStep={setActiveStep}
        getData={getData}
        address={address}
        setAddress={setAddress}
        province={province}
        setProvince={setProvince}
        city={city}
        setCity={setCity}
        plaque={plaque}
        setPlaque={setPlaque}
        unit={unit}
        setUnit={setUnit}
        postCode={postCode}
        setPostCode={setPostCode}
        setAddressId={setAddressId}
        setTalaseaCityId={setTalaseaCityId}
      />
    </Stack>
  );
}

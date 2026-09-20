'use client';

import SelectField, { SelectItem } from '@/app/Components/InputField/SelectField';
import { getCities } from '@/lib/getCities/getCities';
import { Stack } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  province: string;
  setProvince: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

export default function ChooseCity({ province, setProvince, city, setCity }: Props) {
  const [provinceItems, setProvinceItems] = useState<SelectItem[]>([]);
  const [cityItems, setCityItems] = useState<SelectItem[]>([]);
  const [loadingProvinces, setLoadingProvinces] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchProvinces = async () => {
      setLoadingProvinces(true);
      const data = await getCities(0);

      if (cancelled) return;

      if (data) {
        setProvinceItems(
          data.map((item) => ({
            label: item.name,
            value: String(item.province_id),
          }))
        );
      }
      setLoadingProvinces(false);
    };

    fetchProvinces();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchCities = async () => {
      if (!province) {
        setCityItems([]);
        return;
      }

      setLoadingCities(true);
      const data = await getCities(province);

      if (cancelled) return;

      if (data) {
        setCityItems(
          data.map((item) => ({
            label: item.name,
            value: String(item.city_id),
          }))
        );
      }
      setLoadingCities(false);
    };

    fetchCities();

    return () => {
      cancelled = true;
    };
  }, [province]);

  const handleProvinceChange = (value: string) => {
    setProvince(value);
    setCity('');
  };

  return (
    <Stack direction={'column'} gap={2} mb={15}>
      <SelectField
        value={province}
        setValue={handleProvinceChange as Dispatch<SetStateAction<string>>}
        label="استان"
        itemsList={provinceItems}
        isOrederDetail={false}
        style={{ width: '100%', py: 0.7 }}
      />
      <SelectField
        label="شهرها"
        itemsList={cityItems}
        isOrederDetail={false}
        style={{ width: '100%', py: 0.7 }}
        value={city}
        setValue={setCity}
      />
    </Stack>
  );
}
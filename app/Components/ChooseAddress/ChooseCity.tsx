import SelectField, { SelectItem } from '@/app/Components/InputField/SelectField';
import { Stack } from '@mui/material';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { citiesByProvince, provinceItems } from './cities';



interface Props {
  province: string;
  setProvince: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

export default function ChooseCity({ province, setProvince, city, setCity }: Props) {
  const cityItems = useMemo(() => {
    if (province && citiesByProvince[province]) {
      return citiesByProvince[province];
    }
    return [];
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
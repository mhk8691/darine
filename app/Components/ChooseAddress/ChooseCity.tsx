import SelectField from '@/app/Components/InputField/SelectField';
import { Stack } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
const provinceItems = ['قم', 'تهران', 'اصفهان'];
const cityItems = ['کهک', 'قنوات', 'تست'];

interface Props{
  province:string
  setProvince:Dispatch<SetStateAction<string>>
    city:string
  setCity:Dispatch<SetStateAction<string>>
}
export default function ChooseCity({province,setProvince,city,setCity}:Props) {
  return (
    <Stack direction={'column'} gap={2} mb={15}>
      <SelectField
        value={province}
        setValue={setProvince}
        label="استان"
        itemsList={provinceItems}
        isOrederDetail={false}
        style={{ width: '100%', py: 0.7 }}
      />
      <SelectField
        label="شهر ها"
        itemsList={cityItems}
        isOrederDetail={false}
        style={{ width: '100%', py: 0.7 }}
        value={city}
        setValue={setCity}
      />
    </Stack>
  );
}

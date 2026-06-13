import React, { Dispatch, SetStateAction, useState } from 'react';
import SelectInput, { SelectOption } from './SelectInput/SelectInput';
import { Stack } from '@mui/material';
import { DirectAddressesType } from './Cart';

const addressOptions: SelectOption[] = [
  {
    value: 'تهران، هروی سنتر، واحد b44',
    label: 'تهران، هروی سنتر، واحد b44',
  },
];
const dateOptions: SelectOption[] = [
  { value: '1405/02/13', label: '1405/02/13', description: 'يكشنبه' },
  { value: '1405/02/14', label: '1405/02/14', description: 'دوشنبه' },
  { value: '1405/02/15', label: '1405/02/15', description: 'سه شنبه' },
  { value: '1405/02/16', label: '1405/02/16', description: 'چهارشنبه' },
  { value: '1405/02/19', label: '1405/02/19', description: 'شنبه' },
  { value: '1405/02/20', label: '1405/02/20', description: 'يكشنبه' },
];
const hourseOptions: SelectOption[] = [
  { value: 'ساعت: 12 تا 14', label: 'ساعت: 12 تا 14' },
  { value: 'ساعت: 16 تا 18', label: 'ساعت: 16 تا 18' },
  { value: 'ساعت: 18 تا 20', label: 'ساعت: 18 تا 20' },
];

export default function DirectDelivery({
  setDirectAddresses,
}: {
  setDirectAddresses: Dispatch<SetStateAction<DirectAddressesType>>;
}) {
  const [address, setAddress] = useState<string | number>('');
  const [date, setDate] = useState<string | number>('');
  const [hourse, setHourse] = useState<string | number>('');

  const handleChange =
    (field: keyof DirectAddressesType) =>
    (value: string | number): void => {
      switch (field) {
        case 'address':
          setAddress(value);
          break;
        case 'date':
          setDate(value);
          break;
        case 'hourse':
          setHourse(value);
          break;
      }

      setDirectAddresses((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  return (
    <Stack direction={'column'} gap={3} mt={3}>
      <SelectInput
        label="آدرس تحویل"
        value={address}
        onChange={handleChange('address')}
        options={addressOptions}
        placeholder="یک گزینه را انتخاب کنید"
        fullWidth
        modalMode={false}
      />
      <SelectInput
        label="تاریخ تحویل"
        value={date}
        onChange={handleChange('date')}
        options={dateOptions}
        placeholder="یک گزینه را انتخاب کنید"
        fullWidth
        titleModal="انتخاب تاریخ"
      />
      <SelectInput
        label="ساعت تحویل"
        value={hourse}
        onChange={handleChange('hourse')}
        options={hourseOptions}
        placeholder="یک گزینه را انتخاب کنید"
        fullWidth
        titleModal="انتخاب تاریخ"
      />
    </Stack>
  );
}
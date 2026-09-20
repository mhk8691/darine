'use client';

import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { ReceiveAddressItem } from '@/app/core/Types';
import { getReceiveTimes } from '@/lib/getReceiveTimes/getReceiveTimes';
import SelectField from '../Components/InputField/SelectField';

export default function InPersonReceive({
  selectedTimeId,
  setSelectedTimeId,
}: {
  selectedTimeId: string;
  setSelectedTimeId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [addressData, setAddressData] = React.useState<ReceiveAddressItem | null>(null);

  const [selectedDate, setSelectedDate] = React.useState('');

  React.useEffect(() => {
    getReceiveTimes().then((data) => {
      if (data && data.length > 0) {
        setAddressData(data[0]);
      }
    });
  }, []);

  const currentDate = addressData?.dates.find((d) => d.date === selectedDate);

  const dateItems =
    addressData?.dates.map((d) => ({
      label: `${d.day} - ${d.date}`,
      value: d.date,
    })) ?? [];

  const timeItems =
    currentDate?.times.map((t) => ({
      label: t.time,
      value: t.id,
    })) ?? [];

  const handleDateChange: React.Dispatch<React.SetStateAction<string>> = (val) => {
    setSelectedDate(val as unknown as string);
    setSelectedTimeId('');
  };

  return (
    <Stack gap={2} mt={3}>
      {addressData && (
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>آدرس:</Typography>
          <Typography>{addressData.address}</Typography>
        </Stack>
      )}

      <SelectField
        label="انتخاب تاریخ"
        itemsList={dateItems}
        value={selectedDate}
        setValue={handleDateChange}
        isOrederDetail={false}
        style={{ width: '100%', py: 0.7 }}
      />

      <SelectField
        label="انتخاب ساعت"
        itemsList={timeItems}
        value={selectedTimeId}
        setValue={setSelectedTimeId}
        isOrederDetail={false}
        disabled={!selectedDate}
        style={{ width: '100%', py: 0.7 }}
      />
    </Stack>
  );
}

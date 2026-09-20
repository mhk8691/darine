import InputField from '@/app/Components/InputField/InputField';
import { Grid, SxProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type StringSetter = Dispatch<SetStateAction<string>>;

interface Props {
  address: string;
  setAddress: StringSetter;
  plaque: string;
  setPlaque: StringSetter;
  unit: string;
  setUnit: StringSetter;
  postCode: string;
  setPostCode: StringSetter;
}

const inputStyle: SxProps = {
  width: '100%',
  '& .MuiInputBase-input': {
    textAlign: 'left',
  },
};

export default function NewAddress({
  address,
  setAddress,
  plaque,
  setPlaque,
  unit,
  setUnit,
  postCode,
  setPostCode,
}: Props) {
  return (
    <Grid container spacing={2} width="100%">
      <Grid size={12}>
        <InputField
          type="text"
          placeholder="آدرس محل تحویل"
          value={address}
          setValue={setAddress}
          style={inputStyle}
        />
      </Grid>
      <Grid size={6}>
        <InputField
          type="number"
          placeholder="پلاک"
          value={plaque}
          setValue={setPlaque}
          style={inputStyle}
        />
      </Grid>
      <Grid size={6}>
        <InputField
          type="number"
          placeholder="واحد"
          value={unit}
          setValue={setUnit}
          style={inputStyle}
        />
      </Grid>
      <Grid size={12}>
        <InputField
          type="text"
          placeholder="کد پستی"
          value={postCode}
          setValue={setPostCode}
          style={inputStyle}
        />
      </Grid>
    </Grid>
  );
}

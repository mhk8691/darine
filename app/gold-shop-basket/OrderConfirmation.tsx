import { InfoOutlineRounded } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
const rowStyle: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  py: 1.5,
  alignItems: 'center',
  justifyContent: 'space-between',
};
const titleStyle: SxProps = {
  color: 'text.muted',
  fontWeight: 500,
};
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function OrderConfirmation({ setOpen }: Props) {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState('one-time');

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setActive((event.target as HTMLInputElement).value);
  };
  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack direction={'column'}>
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          هزینه ارسال
        </Typography>
        <Typography variant="body1" fontSize={18}>
          100,000 تومان
        </Typography>
      </Stack>
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          هزینه بیمه کالا
        </Typography>
        <Typography variant="body1" fontSize={18}>
          366,559 تومان
        </Typography>
      </Stack>
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          مجموع سفارش
        </Typography>
        <Typography variant="body1" fontSize={18}>
          73,778,453 تومان
        </Typography>
      </Stack>
      <Divider />
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          موجودی کیف پول
        </Typography>
        <Typography variant="body1" fontSize={18}>
          0 تومان
        </Typography>
      </Stack>
      <Divider />
      <Stack sx={rowStyle}>
        <Typography variant="body1" sx={titleStyle}>
          کمبود موجودی
        </Typography>
        <Typography variant="body1" fontSize={18}>
          73,778,453 تومان
        </Typography>
      </Stack>
      <Stack bgcolor={'background.paper'} borderRadius={2} p={2} direction={'row'} gap={1} mt={2}>
        <InfoOutlineRounded sx={{ color: '#D89654' }} />
        <Typography variant="body2" fontWeight={500} sx={{ color: 'text.secondary' }}>
          لطفاً پیش از تأیید، اطلاعات وارد شده و آدرس انتخابی روی نقشه را به دقت بررسی کنید. آدرس
          نادرست می‌تواند موجب تأخیر یا برگشت خوردن مرسوله شما شود.
        </Typography>
      </Stack>
      <FormControl sx={{ mt: 2 }}>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={active}
          onChange={handleChangeRadio}
          sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <FormControlLabel
            value="one-time"
            control={<Radio  disableTouchRipple />}
            label="پرداخت نقدی"
            sx={{
              '& .MuiTypography-root': {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="every-time"
            control={<Radio  disableTouchRipple />}
            label="پرداخت اعتباری"
            sx={{
              '& .MuiTypography-root': {
                fontSize: 18,
              },
            }}
          />
        </RadioGroup>
      </FormControl>
      <FormControlLabel
        label="تحویل فیزیکی شمش تنها با ارائه کارت ملی هوشمند و یا شناسنامه جدید امکان‌پذیر می‌باشد."
        sx={{ mt: 2 }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChangeBox}
             
            sx={{
              '&.Mui-checked': {
                color: 'primary.main',
              },
            }}
            slotProps={{
              input: { 'aria-label': 'controlled' },
            }}
          />
        }
      />
      <Stack mt={3} direction={'row'} gap={2}>
        <Button
          variant="contained"
          color="primary"
           
          sx={{
            fontSize: 20,
            py: 1.3,
            borderRadius: 2,
            width: '70%',
            '&:hover': {
              bgcolor: 'primary.main',
            },
          }}
          disabled={!checked}
        >
          تایید سفارش
        </Button>
        <Button
          variant="outlined"
          color="inherit"
           
          sx={{
            fontSize: 16,
            py: 1.3,
            borderRadius: 2,
            width: '30%',
            '&:hover': {
              bgcolor: 'background.default',
            },
          }}
          onClick={() => setOpen(false)}
        >
          انصراف
        </Button>
      </Stack>
    </Stack>
  );
}

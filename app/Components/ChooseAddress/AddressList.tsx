'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { Close } from '@mui/icons-material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface Props {
  setOpenAddAddress: Dispatch<SetStateAction<boolean>>;
}

export default function AddressList({ setOpenAddAddress }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('address1');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActive((event.target as HTMLInputElement).value);
    setOpen(false);
  };
  return (
    <>
      <TextField
        label={'آدرس تحویل'}
        onClick={() => setOpen(true)}
        defaultValue={'تست'}
        sx={{
          direction: 'ltr',
          width: '100%',
          '& .MuiInputBase-input': {
            '&:hover': {
              cursor: 'default',
            },
            fontSize: '20px',
          },
          '&.MuiFormControl-root .MuiFormLabel-root': {
            color: 'text.subtitle',
          },
          '& .MuiOutlinedInput-root': {
            color: '#ffffff',
            opacity: 1,

            borderRadius: 2,

            '& fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&.Mui-disabled fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
          },
        }}
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ pb: 2 }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={600}>
            انتخاب آدرس
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            disableRipple
          >
            <Close />
          </IconButton>
        </Stack>
        <FormControl sx={{ width: '100%', mt: 2 }}>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={active}
            onChange={handleChange}
            sx={{
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              border={1}
              borderColor={active === 'address1' ? 'primary.main' : 'background.paper'}
              px={1.5}
              py={1}
              pb={2}
              borderRadius={2}
            >
              <Stack direction={'column'}>
                <FormControlLabel
                  value="address1"
                  control={<Radio disableRipple disableTouchRipple />}
                  label="آدرس ۱"
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: 14,
                    },
                  }}
                />
                <Stack
                  direction={'row'}
                  color={'text.subtitle'}
                  gap={0.5}
                  ml={3}
                  alignItems={'center'}
                  pb={1}
                >
                  <LocationPinIcon fontSize="small" />
                  <Typography variant="body2">تهران</Typography>
                </Stack>
                <Stack
                  direction={'row'}
                  color={'text.subtitle'}
                  gap={0.5}
                  ml={3}
                  alignItems={'center'}
                >
                  <EmailIcon fontSize="small" />
                  <Typography variant="body2">۱۲۳۴۵۶۷</Typography>
                </Stack>
              </Stack>
              <DeleteOutlineOutlinedIcon sx={{ mt: 1 }} />
            </Stack>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              border={1}
              borderColor={active === 'address2' ? 'primary.main' : 'background.paper'}
              px={1.5}
              py={1}
              pb={2}
              borderRadius={2}
            >
              <Stack direction={'column'}>
                <FormControlLabel
                  value="address2"
                  control={<Radio disableRipple disableTouchRipple />}
                  label="آدرس 2"
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: 14,
                    },
                  }}
                />
                <Stack
                  direction={'row'}
                  color={'text.subtitle'}
                  gap={0.5}
                  ml={3}
                  alignItems={'center'}
                  pb={1}
                >
                  <LocationPinIcon fontSize="small" />
                  <Typography variant="body2">تهران</Typography>
                </Stack>
                <Stack
                  direction={'row'}
                  color={'text.subtitle'}
                  gap={0.5}
                  ml={3}
                  alignItems={'center'}
                >
                  <EmailIcon fontSize="small" />
                  <Typography variant="body2">۱۲۳۴۵۶۷</Typography>
                </Stack>
              </Stack>
              <DeleteOutlineOutlinedIcon sx={{ mt: 1 }} />
            </Stack>
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: 2, mt: 2, py: 1.5 }}
          onClick={() => {
            setOpenAddAddress(true);
            setOpen(false);
          }}
        >
          افزودن آدرس جدید
        </Button>
      </CustomModal>
    </>
  );
}

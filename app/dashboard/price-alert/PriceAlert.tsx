'use client';
import Container from '@/app/Components/Containers/Container/Container';
import InputField from '@/app/Components/InputField/InputField';
import { addPriceAlert } from '@/lib/priceAlert/priceAlert';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';

export default function PriceAlert() {
  const [value, setValue] = useState('');
  const [active, setActive] = React.useState('ONCE');
  const handlePriceAlert = async ()=>{
    await addPriceAlert(value,active)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive((event.target as HTMLInputElement).value);
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container
      style={{
        px: {
          xs: 0,
          sm: 4,
        },
        border: {
          xs: 0,
          sm: 1,
        },
        borderColor: {
          sm: 'background.paper',
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h6" fontSize={22}>
          آلارم قیمت
        </Typography>
      )}
      <Typography
        variant="body1"
        fontSize={{
          xs: 12,
          sm: 18,
        }}
        sx={{
          color: 'text.secondary',
          mt: {
            xs: 0,
            sm: 2,
          },
        }}
      >
        با تعیین آلارم قیمت، در صورت رسیدن قیمت طلا به مقدار دلخواهتان، بلافاصله از طریق اعلان مطلع
        خواهید شد.
      </Typography>
      <Container
        style={{
          px: {
            xs: 1.5,
            sm: 0,
          },
          py: {
            xs: 2,
            sm: 0,
          },
          mt: {
            xs: 2,
            sm: 0,
          },
          border: {
            xs: 1,
            sm: 0,
          },
          borderColor: {
            xs: 'background.paper',
            sm: 'background.default',
          },
        }}
      >
        <Stack
          sx={{
            mt: {
              xs: 0,
              sm: 3.1,
            },
          }}
        >
          <InputField placeholder="مبلغ به تومان" title="تومان" value={value} setValue={setValue} />
        </Stack>
        <Stack
          direction={'column'}
          gap={1}
          mt={{
            xs: 2,
            sm: 5,
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 18,
            }}
            sx={{ color: 'text.secondary' }}
          >
            زمانبندی اعلان:
          </Typography>
          <FormControl>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={active}
              onChange={handleChange}
              sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <FormControlLabel
                value="ONCE"
                control={<Radio disableRipple disableTouchRipple />}
                label="فقط یکبار اطلاع بده"
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: {
                      xs: 14,
                      sm: 18,
                    },
                  },
                }}
              />
              <FormControlLabel
                value="every-time"
                control={<Radio disableRipple disableTouchRipple />}
                label="هربار اطلاع بده"
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: {
                      xs: 14,
                      sm: 18,
                    },
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePriceAlert}
          sx={{
            borderRadius: 2,
            fontSize: {
              xs: 14,
              sm: 20,
            },
            py: 1,
            mt: {
              xs: 3,
              sm: 6,
              lg: 6,
            },
          }}
        >
          فعال کردن آلارم
        </Button>
      </Container>
    </Container>
  );
}

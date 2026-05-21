'use client';
import ChooseAddress from '@/app/Components/ChooseAddress/ChooseAddress';
import CheckIcon from '@mui/icons-material/Check';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import FinalApproval from './FinalApproval';
import WeightDetermination from './WeightDetermination';
import { giftCardOrder } from '@/lib/giftCard/giftCard';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#444',
    borderTopWidth: 2,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: '#facc15',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: '#facc15',
  },
}));

const CustomStepIconRoot = styled('div')<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  border: '2px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0b0b0b',

  borderColor: ownerState.active || ownerState.completed ? '#facc15' : '#444',

  '& .dot': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#facc15',
    display: ownerState.active || ownerState.completed ? 'block' : 'none',
  },
}));

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  return (
    <CustomStepIconRoot
      ownerState={{ active, completed }}
      className={className}
      sx={{
        bgcolor: completed ? 'primary.main' : 'background.default',
      }}
    >
      {completed ? <CheckIcon sx={{ fontSize: 16, color: '#000000' }} /> : <div className="dot" />}
    </CustomStepIconRoot>
  );
}
const steps = ['تعیین وزن', 'تعیین آدرس', 'تایید نهایی'];

export default function GiftStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [weight, setWeight] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [count, setCount] = React.useState<number>(1);
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState('تست');
    const [province, setProvince] = React.useState('');
  const [city, setCity] = React.useState('');
  const giftCard = async ()=>{
    try{
      const response = await giftCardOrder(weight,count,province,city,address)
      showSnackbar(response.message,true)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext =async () => {
    let newSkipped = skipped;

    if (activeStep === 0) {
      if (price) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }
    } else if (activeStep === 1) {
      setOpen(true);
    } else {
      // newSkipped = new Set(newSkipped.values());
      // newSkipped.delete(activeStep);
          await giftCard()
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mt: {
          xs: 0,
          sm: 5,
        },
      }}
    >
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomConnector />}
        sx={{
          width: '100%',
          '& .MuiStep-root': {
            flex: 1,
            paddingLeft: 0,
            paddingRight: 0,
          },

          '& .MuiStepLabel-root': {
            padding: 0,
            margin: 0,
          },

          '& .MuiStep-alternativeLabel': {
            margin: 0,
          },

          '& .MuiStepConnector-root': {
            flex: 1,
          },
          '& .MuiStepLabel-label': {
            color: 'text.subtitle',
            fontSize: {
              xs: 12,
              sm: 16,
            },
          },
          '& .MuiStepLabel-label.Mui-active': {
            color: 'text.primary',
          },
          '& .MuiStepLabel-label.Mui-completed': {
            color: 'text.title',
            fontWeight: 'bold',
          },
        }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <></>
      ) : (
        <Stack direction={'row'} justifyContent={'center'} mt={5}>
          <Stack
            px={{
              xs: 0,
              sm: activeStep === 2 ? 0 : 5,
            }}
            py={{
              xs: 0,
              sm: activeStep === 2 ? 0 : 6,
            }}
            border={{
              xs: 0,
              sm: activeStep === 2 ? 0 : 1,
            }}
            borderRadius={activeStep === 2 ? 0 : 1.5}
            borderColor={{
              sm: 'background.paper',
            }}
            width={500}
          >
            {activeStep === 0 && (
              <WeightDetermination
                weight={weight}
                setWeight={setWeight}
                price={price}
                setPrice={setPrice}
                count={count}
                setCount={setCount}
              />
            )}
            {activeStep === 1 && (
              <ChooseAddress
              setActiveStep={setActiveStep}
                open={open}
                setOpen={setOpen}
                description=" آدرس مورد نظر خود را اضافه کنید."
                address={address}
setAddress={setAddress}
province={province}
setProvince={setProvince}
city={city}
setCity={setCity}
              />
            )}
            {activeStep === 2 && <FinalApproval city={city} price={price} province={province} address={address} count={count} weight={weight} />}

            <Stack direction={'row'} gap={3} mt={activeStep === 2 ? 2 : 7}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  py: 1.5,
                  fontSize: {
                    xs: 14,
                    sm: 20,
                  },
                  borderRadius: 2,
                  width: {
                    xs: activeStep === 0 ? '100%' : '70%',
                    sm: activeStep === 0 ? '100%' : '65%',
                  },
                  backgroundColor: '#facc15',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#eab308',
                  },
                }}
              >
                {activeStep === 2 ? 'تایید سفارش' : activeStep === 1 ? 'افزودن آدرس' : 'ادامه'}
              </Button>

              {activeStep !== 0 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  sx={{
                    py: 1.5,
                    fontSize: {
                      xs: 14,
                      sm: 20,
                    },
                    borderRadius: 2,
                    width: {
                      xs: '30%',
                      sm: '35%',
                    },
                    borderColor: '#444',
                    color: 'text.title',
                  }}
                >
                  بازگشت
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

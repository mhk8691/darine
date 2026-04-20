"use client";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import AddressSetting from "./AddressSetting";
import FinalApproval from "./FinalApproval";
import WeightDetermination from "./WeightDetermination";

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#444",
    borderTopWidth: 2,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: "#facc15",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: "#facc15",
  },
}));

const CustomStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0b0b0b",

  borderColor: ownerState.active || ownerState.completed ? "#facc15" : "#444",

  "& .dot": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#facc15",
    display: ownerState.active || ownerState.completed ? "block" : "none",
  },
}));

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot
      ownerState={{ active, completed }}
      className={className}
      sx={{
        bgcolor: completed ? "primary.main" : "background.default",
      }}
    >
      {completed ? (
        <CheckIcon sx={{ fontSize: 16, color: "#000000" }} />
      ) : (
        <div className="dot" />
      )}
    </CustomStepIconRoot>
  );
}
const steps = ["تعیین وزن", "تعیین آدرس", "تایید نهایی"];

export default function GiftStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [weight, setWeight] = React.useState<number | null>(null);
  const [price, setPrice] = React.useState<number | null>(null);
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (activeStep === 0) {
      if (price) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }
    } else {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomConnector />}
        sx={{
          width: "100%",

          "& .MuiStep-root": {
            flex: 1,
            paddingLeft: 0,
            paddingRight: 0,
          },

          "& .MuiStepLabel-root": {
            padding: 0,
            margin: 0,
          },

          "& .MuiStep-alternativeLabel": {
            margin: 0,
          },

          "& .MuiStepConnector-root": {
            flex: 1,
          },
          "& .MuiStepLabel-label": {
            color: "#aaa",
            fontSize: 14,
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "#fff",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#fff",
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
        <Stack direction={"row"} justifyContent={"center"} mt={5}>
          <Stack
            px={activeStep === 2 ? 0 : 5}
            py={activeStep === 2 ? 0 : 6}
            border={activeStep === 2 ? 0 : 1}
            borderRadius={activeStep === 2 ? 0 : 1.5}
            borderColor={"#292926"}
            width={activeStep === 0 ? "40%" : "50%"}
          >
            {activeStep === 0 && (
              <WeightDetermination
                weight={weight}
                setWeight={setWeight}
                price={price}
                setPrice={setPrice}
              />
            )}
            {activeStep === 1 && <AddressSetting />}
            {activeStep === 2 && <FinalApproval />}

            <Stack direction={"row"} gap={3} mt={activeStep === 2 ? 2 : 7}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  py: 1.5,
                  fontSize: 20,
                  borderRadius: 2,
                  width: activeStep === 0 ? "100%" : "65%",
                  backgroundColor: "#facc15",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#eab308",
                  },
                }}
              >
                {activeStep === 2 ? "تایید سفارش" : "ادامه"}
              </Button>

              {activeStep !== 0 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  sx={{
                    py: 1.5,
                    fontSize: 20,
                    borderRadius: 2,
                    width: "35%",
                    borderColor: "#444",
                    color: "#fff",
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

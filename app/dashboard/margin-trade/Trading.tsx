"use client";
import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  Slider,
  Stack,
  StyledEngineProvider,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const ltrTheme = createTheme({
  direction: "ltr",
  palette: {
    mode: "dark",
    primary: {
      light: "#FDE378",
      main: "#FCD535",
    },
  },
});
const items: ToggleItemsType[] = [
  { title: "با قیمت بازار", value: "store", id: 1 },
  { title: "با تعیین قیمت", value: "self", id: 2 },
];
const marks = [
  {
    value: 1,
    label: "۱X",
  },

  {
    value: 2,
    label: "۲X",
  },

  {
    value: 3,
    label: "۳X",
  },

  {
    value: 4,
    label: "۴X",
  },

  {
    value: 5,
    label: "۵X",
  },
];
function valuetext(value: number) {
  return `${value}X`;
}
export default function Trading() {
  const [price, setPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [profitLimit, setProfitLimit] = useState("");
  const [lossLimit, setLossLimit] = useState("");
  const [gold, setGold] = useState("");
  const [select, setSelect] = useState(items[0].value);
  const [checked, setChecked] = useState(false);
  const [multiplier, setMultiplier] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isDarkMode = theme.palette.mode === 'dark'
  const handlePriceChange = (val: string) => {
    setPrice(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setGold(String(num / 17999000));
    } else {
      setGold("");
    }
  };

  const handleGoldChange = (val: string) => {
    setGold(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * 17999000));
    } else {
      setPrice("");
    }
  };

  return (
    <Card
      style={{
        py: 0,
        px: {
          xs: 2.5,
          sm: 0,
        },
        border: "none",
        mt: {
          xs: 0,
          sm: 2.5,
        },
      }}
    >
      {!isDesktop && (
        <Typography variant="body1" sx={{ mb: 0.5 }} fontWeight={"500"}>
          فروش
        </Typography>
      )}
      <Stack mb={5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography
              variant="body2"
              fontSize={{
                xs: 16,
                sm: 20,
              }}
              sx={{ color: "text.subtitle" }}
            >
              ضریب سفارش
            </Typography>
            <InfoOutlinedIcon color="primary" />
          </Stack>
          <Typography
            variant="body2"
            fontSize={{
              xs: 18,
              sm: 30,
            }}
          >
            {multiplier}X
          </Typography>
        </Stack>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={ltrTheme}>
            <Slider
              value={multiplier}
              onChange={(_, value) => setMultiplier(value as number)}
              getAriaValueText={valuetext}
              step={0.5}
              marks={marks}
              max={5}
              min={1}
              sx={{
                "& .MuiSlider-thumb.MuiSlider-thumbSizeMedium": {
                  width: "30px",
                  height: "30px",
                },
                width: "100%",
                "&.MuiSlider-root .MuiSlider-rail": {
                  height: 12,
                  color: `${isDarkMode ? "rgb(83, 83, 80)" : "#DDDDDD"} !important`,
                  width: "100%",
                },
                "&.MuiSlider-root .MuiSlider-mark": {
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  color: isDarkMode ? "background.default" : "#FFFFFF",
                },
                "&.MuiSlider-root .MuiSlider-mark.MuiSlider-markActive": {
                  display: "none",
                },
              }}
            />
          </ThemeProvider>
        </StyledEngineProvider>
      </Stack>
      <Stack px={3} mb={3.5}>
        <FilterToggleButton
          items={items}
          select={select}
          setSelect={setSelect}
          style={{
            fontSize: {
              xs: 12,
              sm: 16,
              lg: 20,
            },
            py: {
              xs: 1,
              sm: 1.5,
              md: 1.2,
            },
          }}
        />
      </Stack>
      <Stack gap={3.5}>
        {select === "self" && (
          <Stack>
            <InputField
              placeholder={"قیمت هدف"}
              title={"تومان"}
              value={targetPrice}
              setValue={setTargetPrice}
            />
          </Stack>
        )}
        <Stack>
          <InputField
            placeholder={"وزن طلا"}
            title={"گرم"}
            value={gold}
            setValue={handleGoldChange}
          />
        </Stack>

        <Stack>
          <InputField
            placeholder={"ملبغ کل"}
            title={"تومان"}
            value={price}
            setValue={handlePriceChange}
          />
        </Stack>
      </Stack>
      <FormControlLabel
        label="تعیین حد سود و حد ضرر"
        sx={{
          mt: 2,
          "&.MuiFormControlLabel-root .MuiTypography-root": {
            fontSize: {
              xs: 12,
              sm: 16,
            },
          },
        }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            disableRipple
            sx={{
              color: "text.muted",
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
            slotProps={{
              input: { "aria-label": "controlled" },
            }}
          />
        }
      />
      {checked && (
        <Stack gap={3.5} mt={2}>
          <Stack>
            <InputField
              placeholder={"حد سود سفارش"}
              title={"تومان"}
              value={profitLimit}
              setValue={setProfitLimit}
            />
          </Stack>
          <Stack>
            <InputField
              placeholder={"حد ضرر سفارش"}
              title={"تومان"}
              value={lossLimit}
              setValue={setLossLimit}
            />
          </Stack>
        </Stack>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 20,
          },
          py: 1,
          mt: checked ? 3.5 : 2,
          mb: 2,
        }}
      >
        ثبت سفارش
      </Button>
      <Box
        component={Link}
        href={"/dashboard/margin-rules"}
        sx={{
          fontSize: {
            xs: 12,
            sm: 14,
          },
          color: "#007AFF",
          textDecoration: "underline",
        }}
      >
        قوانین و مقررات سفارش تعهدی
      </Box>
    </Card>
  );
}

"use client";
import Card from "@/app/Components/Card/Card";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
  const [price, setPrice] = useState<number | null>(null);
  const [targetPrice, setTargetPrice] = useState<number | null>(null);
  const [profitLimit, setProfitLimit] = useState<number | null>(null);
  const [lossLimit, setLossLimit] = useState<number | null>(null);
  const [gold, setGold] = useState<number | null>(null);
  const [select, setSelect] = useState(items[0].value);
  const [checked, setChecked] = useState(true);
  const [multiplier, setMultiplier] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    if (!price) {
      setGold(null);
    } else {
      const result = price / 17999000;
      setGold(result);
    }
  }, [price, setPrice]);
  useEffect(() => {
    if (!gold) {
      setPrice(null);
    } else {
      const result = gold * 17999000;
      setPrice(result);
    }
  }, [gold, setGold]);

  return (
    <Card style={{ p: 0, border: "none", mt: 2.5 }}>
      <Stack mb={5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography variant="body2" fontSize={20} sx={{ color: "#ADADA9" }}>
              ضریب سفارش
            </Typography>
            <InfoOutlinedIcon color="primary" />
          </Stack>
          <Typography variant="body2" fontSize={30}>
            {multiplier}X
          </Typography>
        </Stack>
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
              color: "rgb(83, 83, 80) !important",
              width: "100%",
            },
            "&.MuiSlider-root .MuiSlider-mark": {
              height: 8,
              width: 8,
              borderRadius: "50%",
              color: "background.default",
            },
            "&.MuiSlider-root .MuiSlider-mark.MuiSlider-markActive": {
              display: "none",
            },
          }}
        />
      </Stack>
      <Stack px={3} mb={3.5}>
        <FilterToggleButton
          items={items}
          select={select}
          setSelect={setSelect}
          style={{ fontSize: 20 }}
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
            setValue={setGold}
          />
        </Stack>

        <Stack>
          <InputField
            placeholder={"ملبغ کل"}
            title={"تومان"}
            value={price}
            setValue={setPrice}
          />
        </Stack>
      </Stack>
      <FormControlLabel
        label="تعیین حد سود و حد ضرر"
        sx={{ mt: 2 }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            disableRipple
            sx={{
              color: "#C2C2BA",
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
          fontSize: 20,
          py: 1,
          mt: checked ? 3.5 : 2,
          mb: 2,
        }}
      >
        ثبت سفارش
      </Button>
      <Link
        href={"/dashboard/margin-rules"}
        style={{ fontSize: 14, color: "#007AFF", textDecoration: "underline" }}
      >
        قوانین و مقررات سفارش تعهدی
      </Link>
    </Card>
  );
}

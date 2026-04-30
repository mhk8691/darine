"use client";

import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import { Button, Stack, SvgIcon } from "@mui/material";
import { useState } from "react";

interface Props {
  type: "buy" | "sell";
}

const items: ToggleItemsType[] = [
  { title: "در قیمت بالاتر", value: "max", id: 1 },
  { title: "در قیمت پایین تر", value: "min", id: 2 },
];

const RATE = 17999000;

export default function Trade({ type }: Props) {
  const [price, setPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [select, setSelect] = useState(
    type === "sell" ? items[0].value : items[1].value,
  );

  // 👉 derived value (no state needed)
  const gold = price ? String(Number(price) / RATE) : "";

  return (
    <Card
      style={{
        gap: 3.5,
        border: "none",
        py: 1,
        px: { xs: 0, sm: 1 },
      }}
    >
      <FilterToggleButton items={items} select={select} setSelect={setSelect} />

      <Stack gap={3.5}>
        {/* Target Price */}
        <InputField
          placeholder={type === "buy" ? "قیمت مد نظر خرید" : "قیمت مد نظر فروش"}
          title="تومان"
          value={targetPrice}
          setValue={setTargetPrice}
        />

        <Stack gap={1.5}>
          {/* PRICE (source of truth) */}
          <InputField
            placeholder="مبلغ به تومان"
            title="تومان"
            value={price}
            setValue={setPrice}
          />

          {/* ICON */}
          <Stack direction="row" justifyContent="center">
            <SvgIcon
              sx={{
                bgcolor: "#FEF2C0",
                borderRadius: "50%",
                color: "black",
                width: 35,
                height: 35,
                p: 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.9 4.4L4.4 2 2 4.4" stroke="currentColor" />
                <path d="M4.4 14V2" stroke="currentColor" />
                <path d="M9 11.5l2.5 2.5 2.5-2.5" stroke="currentColor" />
                <path d="M11.5 2v12" stroke="currentColor" />
              </svg>
            </SvgIcon>
          </Stack>

          {/* GOLD (derived, NOT editable) */}
          <InputField
            placeholder="وزن طلا"
            title="گرم"
            value={gold}
            setValue={() => {}}
          />
        </Stack>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}
      >
        ثبت سفارش
      </Button>
    </Card>
  );
}

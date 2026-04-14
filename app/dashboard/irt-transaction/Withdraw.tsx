"use client";
import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import BankCard from "./BankCard";

const items: ToggleItemsType[] = [
  { title: "به حساب بانکی", value: "bank", id: 1 },
  { title: "به نقره سی", value: "silver", id: 2 },
];
export default function Withdraw() {
  const [price, setPrice] = useState<number | null>(null);
  const [select, setSelect] = useState(items[0].value);

  return (
    <Card style={{ gap: 3.5, p: 0, border: "none" }}>
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{ fontSize: 20 }}
      />
      <Stack gap={3.5}>
        <Stack direction={"column"} gap={3}>
          <InputField
            placeholder={"ملبغ"}
            title={"تومان"}
            value={price}
            setValue={setPrice}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FEF2C0",
              color: "#292926",
              borderRadius: 1.5,
              px: 1,
              width: "30%",
            }}
          >
            انتخاب کل موجودی
          </Button>
        </Stack>
        {select !== "silver" && <BankCard />}
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}
      >
        برداشت
      </Button>
    </Card>
  );
}

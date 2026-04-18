"use client";
import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// interface Props {
//   inputList: {
//     placeholder: string;
//     title: string;
//     state: number | null;
//     setState: Dispatch<SetStateAction<number | null>>;
//   }[];
//   title: string;
// }
const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState<number | null>(null);
  const [gold, setGold] = useState<number | null>(null);
  const [select, setSelect] = useState(items[0].value);
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
    <Card style={{ gap: 3.15, py: 3,px:4 }}>
      <Typography variant="h2" fontSize={22}>
        خرید و فروش طلا
      </Typography>
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{ fontSize: 20 }}
      />
      <Stack
        gap={3.5}
        flexDirection={select === "buy" ? "column" : "column-reverse"}
      >
        <Stack>
          <InputField
            placeholder={"ملبغ به تومان"}
            title={"تومان"}
            value={price}
            setValue={setPrice}
          />
        </Stack>
        <Stack>
          <InputField
            placeholder={"وزن طلا"}
            title={"گرم"}
            value={gold}
            setValue={setGold}
          />
        </Stack>
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

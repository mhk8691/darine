"use client";
import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState("");
  const [gold, setGold] = useState("");
  const [select, setSelect] = useState(items[0].value);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

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
        gap: 3.15,
        py: 3,
        px: {
          xs: 2,
          sm: 4,
          md: 2,
          lg: 4,
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h2" fontSize={22}>
          خرید و فروش طلا
        </Typography>
      )}
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{
          fontSize: {
            xs: 16,
            sm: 20,
          },
        }}
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
            setValue={handlePriceChange}
          />
        </Stack>
        <Stack>
          <InputField
            placeholder={"وزن طلا"}
            title={"گرم"}
            value={gold}
            setValue={handleGoldChange}
          />
        </Stack>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}
      >
        {select === "buy" ? "خرید" : "فروش"}
      </Button>
    </Card>
  );
}

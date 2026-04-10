"use client";
import { Stack } from "@mui/material";
import FilterButton from "./Components/OrderDetail/FilterButton";
import FilterInput from "./Components/OrderDetail/FilterInput";

export default function page() {
  return (
    <Stack width={"10%"} m={5}>
      <FilterButton title="خرید" />
      <FilterButton title="فروش" />
      <FilterInput type="date" />
      <FilterInput type="menu" />
    </Stack>
  );
}

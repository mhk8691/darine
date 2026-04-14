"use client";
import FilterButton from "@/app/Components/OrderDetail/FilterButton";
import { Stack } from "@mui/material";
import React, { useState } from "react";

export default function Sort() {
  const [active, setActive] = useState<number | null>(1);
  return (
    <Stack direction={"row"} gap={1.5}>
      <FilterButton
        active={active}
        setActive={setActive}
        item={{
          title: "۱۸ عیار",
          id: 1,
          value: "18",
        }}
      />
      <FilterButton
        active={active}
        setActive={setActive}
        item={{
          title: "۲۴ عیار",
          id: 2,
          value: "24",
        }}
      />
      <FilterButton
        active={active}
        setActive={setActive}
        item={{
          title: "پارسیان",
          id: 3,
          value: "parsian",
        }}
      />
    </Stack>
  );
}

"use client";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import FilterToggleButton from "../FilterToggleButton/FilterToggleButton";
import { ToggleItemsType } from "@/app/core/Types";
import Card from "../Card/Card";
interface Props {
  title: string;
  emptyMessage: string;
  type: "chip" | "toggle";
}
const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy" },
  { title: "فروش", value: "sell" },
];
export default function OrderDetail({ title, emptyMessage, type }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const [select, setSelect] = useState(items[0].value);
  return (
    <Card
    >
      <Typography variant="h2" fontSize={22} mb={4}>
        {title}
      </Typography>
      {type === "chip" ? (
        <Stack direction={"row"} gap={2} mb={3}>
          <FilterButton
            title="خرید"
            id={2}
            active={active}
            setActive={setActive}
          />
          <FilterButton
            title="فروش"
            id={1}
            active={active}
            setActive={setActive}
          />
        </Stack>
      ) : (
        <Stack mb={3} width={"fit-content"}>
          <FilterToggleButton
            items={items}
            select={select}
            setSelect={setSelect}
          />
        </Stack>
      )}
      <Stack gap={2} direction={"row"} alignItems={"center"}>
        <Stack direction={"row"} gap={0.5}>
          <FilterListIcon sx={{ color: "#ADADA9" }} />
          <Typography variant="body2" sx={{ color: "#ADADA9" }}>
            فیلترها:
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <FilterInput type="menu" />
          <FilterInput type="date" />
        </Stack>
      </Stack>
      <Stack
        mt={10}
        mb={8}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
      >
        <Image
          src={"/images/emptyTableDark.png"}
          width={300}
          height={270}
          alt=""
        />
        <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
          {emptyMessage}
        </Typography>
      </Stack>
    </Card>
  );
}

"use client";
import { Stack, SxProps, Typography } from "@mui/material";
import Card from "../Container/Container";
import LineChart from "../LineChart/LineChart";
import BottomPrice from "./BottomPrice";
import TopPrice from "./TopPrice";
import FilterToggleButton from "../FilterToggleButton/FilterToggleButton";
import { useState } from "react";
import { ToggleItemsType } from "@/app/core/Types";

const pData = [
  2350, 200, 300, 600, 802, 5000, 3290, 100, 200, 400, 300, 2435, 2450, 2465,
  2455, 2470, 2480, 2475, 2490, 2500, 2495, 2510, 2520, 2515,
];
const xLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

interface Props {
  positionPrice: "top" | "bottom" | "both";
  chartHeight?: string;
  cardStyle?: SxProps;
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
}
const toggleItems: ToggleItemsType[] = [
  {
    id: 1,
    title: "۲۴ ساعت اخیر",
    value: "lastDay",
  },
  {
    id: 2,
    title: "هفتگی",
    value: "lastWeek",
  },
  {
    id: 3,
    title: "ماهانه",
    value: "lastMonth",
  },
];
export default function ChartGold({
  positionPrice,
  chartHeight,
  cardStyle,
  dividerStyle,
  priceStyle,
}: Props) {
  const [select, setSelect] = useState(toggleItems[0]?.value);
  return (
    <Card style={cardStyle}>
      <Typography
        variant="h2"
        fontSize={22}
        fontWeight={"bold"}
        sx={{ color: "text.title" }}
      >
        نمودار لحظه ای قیمت طلا
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        mb={positionPrice === "top" || positionPrice === "both" ? 0 : 2.5}
      >
        <Stack width={"35%"}>
          <FilterToggleButton
            select={select}
            setSelect={setSelect}
            items={toggleItems}
            style={{
              fontSize: 12,
              px: 1.5,
              py: 0.7,
            }}
          />
        </Stack>
      </Stack>
      {(positionPrice === "top" || positionPrice === "both") && <TopPrice />}

      <LineChart
        width="100%"
        height={chartHeight || "180px"}
        noGradiant={false}
        color="#FFD700"
        data={pData}
        label={xLabels}
        noLabel={false}
      />
      {(positionPrice === "bottom" || positionPrice === "both") && (
        <BottomPrice priceStyle={priceStyle} dividerStyle={dividerStyle} />
      )}
    </Card>
  );
}

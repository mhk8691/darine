import { Stack, Typography } from "@mui/material";
import React from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import Image from "next/image";
interface Props {
  title: string;
  emptyMessage: string;
}
export default function OrderDetail({ title, emptyMessage }: Props) {
  return (
    <Stack
      sx={{
        bgcolor: "background.default",
        borderRadius: 2.5,
        py: 3,
        px: 4,
      }}
    >
      <Typography variant="h2" fontSize={22} mb={4}>
        {title}
      </Typography>
      <Stack direction={"row"} gap={2} mb={1}>
        <FilterButton title="خرید" />
        <FilterButton title="فروش" />
      </Stack>
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
    </Stack>
  );
}

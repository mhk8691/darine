import React, { ReactNode } from "react";
import Card from "../Card/Card";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GoldBuy from "./GoldBuy";
interface Props {
  title: string;
  banner: ReactNode;
  icon: ReactNode;
  description: string;
  options: string[];
  tooltip: string;
}
export default function CreditContainer({
  title,
  banner,
  icon,
  description,
  options,
  tooltip,
}: Props) {
  const words = title?.trim().split(" ") || [];
  const lastWord = words.length > 0 ? words[words.length - 1] : "";
  const firstPart = words.slice(0, -1).join(" ");
  return (
    <Card>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography variant="h6" fontSize={22}>
          {firstPart} <span style={{ color: "#0040ff" }}>{lastWord}</span>
        </Typography>
        {icon}
      </Stack>
      {banner}
      <Typography
        variant="body1"
        fontSize={18}
        sx={{ color: "text.secondary", mt: 4.5 }}
      >
        {description}
      </Typography>
      <Typography
        variant="body1"
        fontSize={16}
        sx={{ color: "text.secondary", mt: 3.5, mb: 0.5 }}
      >
        مزایای این سرویس:
      </Typography>
      <Stack>
        {options.map((option) => (
          <Stack direction={"row"} alignItems={"center"} gap={1} key={option}>
            <FiberManualRecordIcon sx={{ width: 7, height: 25 }} />
            <Typography
              variant="body2"
              fontSize={16}
              sx={{ color: "text.secondary" }}
            >
              {option}
            </Typography>
          </Stack>
        ))}
      </Stack>
      {tooltip && (
        <>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
            bgcolor={"#292926"}
            borderRadius={2}
            p={2}
            width={"fit-content"}
            mt={2}
          >
            <InfoOutlinedIcon sx={{ color: "#C1884E" }} />
            <Typography
              variant="body2"
              fontSize={14}
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              {tooltip}
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <GoldBuy />
          </Stack>
        </>
      )}
    </Card>
  );
}

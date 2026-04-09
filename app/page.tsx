import { Stack } from "@mui/material";
import GoldTable, { createData } from "./Components/Tables/GoldTable";

const rows = [
  createData({
    typeGold: 'طلای ۱۸ عیار(گرم)',
    currentRate: 18069000,
    minPriceDay: 17900000,
    maxPriceDay: 18187000,
    dayChange: 1.13,
    monthChange: 1.15,
    weeklyChart: 3,
  }),
  createData({
    typeGold: 'طلای ۱۸ عیار(گرم)',
    currentRate: 18069000,
    minPriceDay: 17900000,
    maxPriceDay: 18187000,
    dayChange: 1.13,
    monthChange: 1.15,
    weeklyChart: 3,
  }),
  createData({
    typeGold: 'طلای ۱۸ عیار(گرم)',
    currentRate: 18069000,
    minPriceDay: 17900000,
    maxPriceDay: 18187000,
    dayChange: 1.13,
    monthChange: 1.15,
    weeklyChart: 3,
  }),
  createData({
    typeGold: 'طلای ۱۸ عیار(گرم)',
    currentRate: 18069000,
    minPriceDay: 17900000,
    maxPriceDay: 18187000,
    dayChange: 1.13,
    monthChange: 1.15,
    weeklyChart: 3,
  }),
 
];
const heads = [
  "نوع طلا",
  "نرخ فعلی",
  "پایین ترین قیمت روز",
  "بالاترین قیمت روز",
  "تغییر ۱ روزه",
  "تغییر ۱ ماهه",
  "نمودار هفتگی",
  "عملیات",
];
export default function page() {
  return (
    <Stack width={"90%"} m={5}>
      <GoldTable data={rows} heads={heads} />
    </Stack>
  );
}

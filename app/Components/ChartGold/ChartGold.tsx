import { Stack, Typography } from "@mui/material";
import Card from "../Card/Card";
import LineChart from "../LineChart/LineChart";
import BottomPrice from "./BottomPrice";
import TopPrice from "./TopPrice";

const pData = [
  2350, 200, 300, 600, 802, 5000, 3290, 100, 200, 400, 300, 2435, 2450, 2465,
  2455, 2470, 2480, 2475, 2490, 2500, 2495, 2510, 2520, 2515,
];
const xLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

interface Props {
  positionPrice: "top" | "bottom";
}
export default function ChartGold({ positionPrice }: Props) {
  return (
    <Card>
      <Typography variant="h2" fontSize={22}>
        نمودار لحظه ای قیمت طلا
      </Typography>
      {positionPrice === "top" && <TopPrice />}
      <LineChart
        width="100%"
        height="278px"
        noGradiant={false}
        color="#FFD700"
        data={pData}
        label={xLabels}
        noLabel={false}
      />
      {positionPrice === "bottom" && <BottomPrice />}
    </Card>
  );
}

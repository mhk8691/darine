import Box from "@mui/material/Box";
import { LineChart as LineChartGold } from "@mui/x-charts/LineChart";

const margin = {  top: 0,bottom:0,left:10 };

interface Props {
  data: Array<number>;
  label: string[];
  width: string;
  height: string;
  color: string;
  noGradiant: boolean;
  noLabel: boolean;
}
export default function LineChart({
  data,
  label,
  width,
  height,
  color,
  noGradiant,
  noLabel,
}: Props) {
  return (
    <Box
      sx={{
        width: { width },
        height: { height },
        "& .MuiAreaElement-root": {
          fill: "url(#goldGradient)",
        },

        "& .MuiChartsAxis-tick": {
          display: "none",
        },
        "& .MuiChartsAxis-line": {
          display: "none",
        },
      }}
    >
      <LineChartGold
        slotProps={{
          tooltip: {
            trigger: "axis",
          },
        }}
        series={[
          {
            data: data,
            showMark: false,
            curve: "bumpX",
            area: true,
            color: color,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: label,
            height: 30,
            position: noLabel ? "none" : "bottom",
          },
        ]}
        yAxis={[{ width: 40, position: noLabel ? "none" : "left" }]}
        margin={margin}
      >
        {!noGradiant && (
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#403D33" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1F1E1B" stopOpacity={0} />
            </linearGradient>
          </defs>
        )}
      </LineChartGold>
    </Box>
  );
}

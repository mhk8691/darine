import Box from "@mui/material/Box";
import { LineChart as LineChartGold } from "@mui/x-charts/LineChart";

const margin = { right: 24 };

interface Props {
  data: Array<number>;
  label: string[];
  width: string;
  height: string;
  color: string;
  noGradiant: boolean;
}
export default function LineChart({
  data,
  label,
  width,
  height,
  color,
  noGradiant,
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
        xAxis={[{ scaleType: "point", data: label, height: 30 }]}
        yAxis={[{ width: 50,  }]}
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

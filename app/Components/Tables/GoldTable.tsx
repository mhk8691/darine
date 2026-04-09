import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";
import Link from "next/link";
import LineChart from "../LineChart/LineChart";

export function createData({
  typeGold,
  currentRate,
  minPriceDay,
  maxPriceDay,
  dayChange,
  monthChange,
  weeklyChart,
}: DataType) {
  return {
    typeGold,
    currentRate,
    minPriceDay,
    maxPriceDay,
    dayChange,
    monthChange,
    weeklyChart,
  };
}

interface DataType {
  typeGold: string;
  currentRate: number;
  minPriceDay: number;
  maxPriceDay: number;
  dayChange: number;
  monthChange: number;
  weeklyChart: number;
}
interface Props {
  heads: string[];
  data: DataType[];
}
export default function GoldTable({ heads, data }: Props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgb(16, 16, 15,1) !important",
        border: "1px solid #393936",
        borderRadius: 3,
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((head, index) => (
              <TableCell
                align="center"
                key={index}
                sx={{ color: "#ADADA9", fontSize: "16px", px: 2, py: 2.5 }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.typeGold}
              sx={{
                "&:last-child td": {
                  border: 0,
                },
                "&:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                {row.typeGold}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={0.5}
                  justifyContent={"center"}
                >
                  <Typography variant="body1">
                    {row.currentRate.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    تومان
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={0.5}
                  justifyContent={"center"}
                >
                  <Typography variant="body1">
                    {row.minPriceDay.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    تومان
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={0.5}
                  justifyContent={"center"}
                >
                  <Typography variant="body1">
                    {row.maxPriceDay.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    تومان
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                {row.dayChange}
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                {row.monthChange}
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                {/* {row.weeklyChart} */}
                <Stack direction={"row"} justifyContent={"center"}>
                  <LineChart
                    color="#D12F2F"
                    width="100%"
                    height="50px"
                    noGradiant
                    data={[1, 2, 10]}
                    label={["فروردین", "اردیبهشت", "خرداد"]}
                    noLabel={true}
                  />
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                <Link href={"/test"}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ borderRadius: 2, p: 0.8 }}
                  >
                    مشاهده جزئیات
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

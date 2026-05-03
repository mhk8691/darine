import { TableGoldDataType } from "@/app/core/Types";
import { Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
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
}: TableGoldDataType) {
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

interface Props {
  heads: string[];
  data: TableGoldDataType[];
}
export default function GoldTable({ heads, data }: Props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor:'background.default',
        border:1,
        borderColor:'background.border',
        borderRadius: 3,
        boxShadow:'none'
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((head, index) => (
              <TableCell
                align="center"
                key={index}
                sx={{
                  color: "text.subtitle",
                  fontSize: "16px",
                  px: 2,
                  py: 2.5,
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.currentRate}
              sx={{
                "&:last-child td": {
                  border: 0,
                },
                "&:last-child th": { border: 0 },
              }}
            >
              {row.typeGold && (
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
                >
                  {row.typeGold}
                </TableCell>
              )}
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
                sx={{
                  fontSize: "16px",
                  py: 0.9,
                  px: 2.5,
                  color: row.dayChange >= 0 ? "success.main" : "error.main",
                }}
              >
                {row.dayChange}%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: "16px",
                  py: 0.9,
                  px: 2.5,
                  color: row.monthChange >= 0 ? "success.main" : "error.main",
                }}
              >
                {row.monthChange}%
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
              >
                <Stack direction={"row"} justifyContent={"center"}>
                  <LineChart
                    color="#D12F2F"
                    width={row.typeGold ? "90%" : "70%"}
                    height="40px"
                    noGradiant
                    data={[1, 2, 3]}
                    label={["فروردین", "اردیبهشت", "خرداد"]}
                    noLabel={true}
                  />
                </Stack>
              </TableCell>
              {row.typeGold && (
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", py: 0.9, px: 2.5 }}
                >
                  <Link href={"/test/"}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderRadius: 2, p: 0.8 }}
                    >
                      مشاهده جزئیات
                    </Button>
                  </Link>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import priceFormater from "@/app/core/PriceFormater";
import { TableGoldDataType } from "@/app/core/Types";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LineChart from "../LineChart/LineChart";

interface Props {
  items: TableGoldDataType[];
  isDetail?: boolean;
}
export default function LaptopTable({ items, isDetail = true }: Props) {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid
          size={12}
          key={item.typeGold}
          direction={"column"}
          border={1}
          borderRadius={2}
          mb={1}
          borderColor={"background.paper"}
        >
          <>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              bgcolor={"#292926"}
              px={1.5}
              py={1}
              sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            >
              <Typography variant="body1" fontSize={12} fontWeight={"bold"}>
                {item.typeGold}
              </Typography>
              {isDetail && (
                <Link href={"/"}>
                  <Typography
                    variant="body2"
                    fontSize={10}
                    sx={{ color: "#0091F8" }}
                  >
                    مشاهده جزئیات
                  </Typography>
                </Link>
              )}
            </Stack>
          </>
          <Stack p={1.5} pt={0}>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  نرخ فعلی:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.currentRate)}{" "}
                  <Box component={"span"} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  پایین ترین قیمت روز:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.minPriceDay)}{" "}
                  <Box component={"span"} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  بالاترین قیمت روز:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(item.maxPriceDay)}{" "}
                  <Box component={"span"} fontSize={10}>
                    تومان
                  </Box>
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  تغییر ۱ روزه:
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{
                    color: item.dayChange >= 0 ? "success.main" : "error.main",
                  }}
                >
                  {item.dayChange}%
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  تغییر ۱ ماهه:
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{
                    color: item.monthChange >= 0 ? "success.main" : "error.main",
                  }}
                >
                  {item.monthChange}%
                </Typography>
              </Stack>
              <Divider />
            </>
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={1}
              >
                <Typography
                  variant="body1"
                  fontSize={10}
                  fontWeight={"bold"}
                  sx={{ color: "#ADADA9" }}
                >
                  نمودار هفتگی :
                </Typography>
                <LineChart
                  color="#D12F2F"
                  width={"15%"}
                  height="5px"
                  noGradiant
                  data={[1, 2, 3]}
                  label={["فروردین", "اردیبهشت", "خرداد"]}
                  noLabel={true}
                />
              </Stack>
            </>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

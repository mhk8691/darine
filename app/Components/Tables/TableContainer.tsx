import { FaqItem, TableGoldDataType } from "@/app/core/Types";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TradeCard from "./TradeCard";
import PriceAlertCard from "./PriceAlertCard";
import GoldTable from "./GoldTable";
import Faq from "../Faq/Faq";
import HowBuyGold from "./HowBuyGold";
import ApplicationDownload from "./ApplicationDownload";

interface Props {
  title: string;
  data?: { title: string; order: number; data: TableGoldDataType[] }[];
  faqData: FaqItem[];
}

export default function TableContainer({ title, data, faqData }: Props) {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ px: "40px !important", mt: 5 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"column"} gap={4}>
            <Stack direction={"row"} gap={3.5} alignItems={"center"}>
              <Image alt="" src={"/images/gold.webp"} width={80} height={80} />
              <Typography
                variant="h6"
                fontSize={38}
                sx={{ color: "text.title" }}
              >
                قیمت {title}
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h6"
                fontSize={22}
                sx={{ color: "text.title" }}
              >
                قیمت لحظه ای {title} امروز
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                sx={{ color: "#C2C2BA", mt: 2 }}
              >
                بازه‌ تغییرات قیمت ۲۴ ساعت تعیین شده است
              </Typography>
            </Stack>
          </Stack>
          <Stack width={"50%"} direction={"row"} gap={1} alignItems={"center"}>
            <PriceAlertCard />
            <TradeCard />
          </Stack>
        </Stack>
        <Grid container spacing={7}>
          {data?.map((item) => (
            <Grid size={12} key={item.order} mt={item.order == 1 ? 2 : 0}>
              {item.order != 1 && (
                <Typography
                  variant="h6"
                  fontSize={22}
                  sx={{ color: "text.title", mb: 3 }}
                >
                  قیمت {item.title} امروز
                </Typography>
              )}
              <GoldTable
                data={item.data}
                heads={[
                  "نوع طلا",
                  "نرخ فعلی",
                  "پایین‌ترین قیمت روز",
                  "بالاترین قیمت روز",
                  "تغییر ۱ روزه",
                  "تغییر ۱ ماهه",
                  "نمودار هفتگی",
                  "عملیات",
                ]}
              />
            </Grid>
          ))}
          <Grid size={12} container alignItems={"stretch"} height={"100%"}>
            <Grid size={6}>
              <ApplicationDownload />
            </Grid>
            <Grid size={6}>
              <HowBuyGold />
            </Grid>
          </Grid>
          <Grid size={12}>
            <Faq faqData={faqData} />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}

import { FaqItem, TableGoldDataType } from "@/app/core/Types";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Faq from "../../Faq/Faq";
import ApplicationDownload from "./ApplicationDownload";
import HowBuyGold from "./HowBuyGold";
import MobileTable from "./MobileTable";
import PriceAlertCard from "./PriceAlertCard";
import TableContainer from "./TableContainer";
import TradeCard from "./TradeCard";

interface Props {
  title: string;
  data?: { title: string; order: number; data: TableGoldDataType[] }[];
  faqData: FaqItem[];
}

export default function GoldContainer({ title, data, faqData }: Props) {
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          px: {
            xs: "16px !important",
            md: "24px !important",
            lg: "40px !important",
          },
          mt: 5,
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent={"space-between"}
          alignItems={{
            xs: "flex-start",
            sm: "center",
          }}
          spacing={{
            xs: 2,
            sm: 0,
          }}
        >
          <Stack direction={"column"} gap={4}>
            <Stack
              direction={"row"}
              gap={{
                xs: 1,
                md: 3.5,
              }}
              alignItems={"center"}
            >
              <Stack
                width={{
                  xs: "40px",
                  sm: "80px",
                }}
                height={{
                  xs: "40px",
                  sm: "80px",
                }}
              >
                <Image
                  alt=""
                  src={"/images/gold.webp"}
                  width={80}
                  height={80}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Stack>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 16,
                  sm: 38,
                }}
                sx={{ color: "text.title" }}
              >
                قیمت {title}
              </Typography>
            </Stack>
            <Stack
              display={{
                xs: "none",
                sm: "flex",
              }}
            >
              <Typography
                variant="h6"
                fontSize={{
                  xs: 14,
                  sm: 22,
                }}
                sx={{ color: "text.title" }}
              >
                قیمت لحظه ای {title} امروز
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 14,
                }}
                sx={{ color: "text.muted", mt: 2 }}
              >
                بازه‌ تغییرات قیمت ۲۴ ساعت تعیین شده است
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              sm: "fit-content",
            }}
            direction={"row"}
            gap={1}
            alignItems={"center"}
            justifyContent={{
              xs: "flex-end",
              md: "center",
            }}
          >
            <PriceAlertCard />
            <TradeCard isDetail={false} />
          </Stack>
          <Stack
            display={{
              xs: "flex",
              sm: "none",
            }}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 22,
              }}
              sx={{ color: "text.title" }}
            >
              قیمت لحظه ای {title} امروز
            </Typography>
            <Typography
              variant="h6"
              fontSize={{
                xs: 10,
                sm: 14,
              }}
              sx={{ color: "text.muted", mt: 2 }}
            >
              بازه‌ تغییرات قیمت ۲۴ ساعت تعیین شده است
            </Typography>
          </Stack>
        </Stack>
        {data && <MobileTable items={data[0].data} />}
        <Grid
          container
          spacing={{
            xs: 3,
            md: 7,
          }}
        >
          {data?.map((item) => (
            <Grid size={12} key={item.order} mt={item.order == 1 ? 2 : 0}>
              {item.order != 1 && (
                <Typography
                  variant="h6"
                  fontSize={{
                    xs: 14,
                    md: 22,
                  }}
                  sx={{
                    color: "text.title",
                    mb: {
                      xs: 1.5,
                      md: 3,
                    },
                  }}
                >
                  قیمت {item.title} امروز
                </Typography>
              )}
              <TableContainer data={item.data} />
            </Grid>
          ))}
          <Grid size={12} container alignItems={"stretch"} height={"100%"}>
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <ApplicationDownload />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
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

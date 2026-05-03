import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import {
  CallIcon,
  MapIcon,
  EmailIcon,
} from "../Components/CustomIcons/CustomIcons";
export const metadata: Metadata = {
  title: "شعب حضوری  | دارینه",
  description: "",
};
export default function page() {
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
          mt: {
            xs: 0,
            sm: 3,
          },
        }}
      >
        <Grid container spacing={2} display={"flex"} alignItems={"center"}>
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 18,
                sm: 38,
              }}
              sx={{ color: "text.title", mb: 2 }}
            >
              دفاتر و شعب دارینــه
            </Typography>
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 20,
              }}
              sx={{
                mb: {
                  xs: 2,
                  sm: 0,
                },
              }}
              fontWeight={300}
              lineHeight={"32px"}
            >
              سایت و اپلیکیشن موبایل دارینه به شما اجازه می‌دهد تا طلای آب شده
              را به‌صورت آنلاین و اینترنتی خرید و فروش کنید. اما برای جلب اعتماد
              شما و ارائه خدمات بیشتر، دارینه دفاتر و شعبه‌های حضوری هم دارد که
              با مراجعه به آن‌ها می‌توانید موجودی طلای دیجیتال خود را به‌شکل
              طلای فیزیکی و در قالب شمش طلا‌ دریافت کنید.
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
            display={"flex"}
            justifyContent={{
              xs: "center",
              sm: "flex-end",
            }}
          >
            <Image
              src={"/images/branchesHeader.svg"}
              alt=""
              width={520}
              height={530}
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          fontSize={{
            xs: 16,
            sm: 30,
          }}
          sx={{ color: "text.title", mt: 19 }}
        >
          شعبه هروی سنتر
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          alignItems={"center"}
          gap={{
            xs: 2,
            sm: 0,
          }}
          mt={{
            xs: 4,
            sm: 8,
          }}
        >
          <Stack
            width={{
              xs: "100%",
              sm: "50%",
            }}
          >
            <Stack
              width={{
                xs: "100%",
                sm: "85%",
              }}
            >
              <Image
                src={"/images/firstBranch.webp"}
                alt=""
                width={520}
                height={530}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 8,
                }}
              />
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              sm: "50%",
            }}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 20,
              }}
              fontWeight={300}
              lineHeight={"32px"}
            >
              شعبه تحویل فیزیکی دارینه در پاسداران و مجتمع اداری هروی سنتر قرار
              دارد. شما می‌توانید هر زمان که دل‌تان خواست در پنل کاربری خود
              درخواست تحویل فیزیکی خود را ثبت کنید و بعد از هماهنگی با پشتیبانی
              و مراجعه به این آدرس، طلای خود را تحویل بگیرید.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"column"} gap={3} mt={5}>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            gap={1}
            alignItems={{
              xs: "flex-start",
              sm: "center",
            }}
          >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <MapIcon />
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 20,
                }}
                fontWeight={500}
              >
                آدرس:
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 20,
              }}
              fontWeight={500}
            >
              پاسداران، میدان عقیلی، خیابان نازک، مجتمع اداری هروی سنتر، پلاک ۲،
              طبقه منفی ۱، واحد b44
            </Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            gap={1}
            alignItems={{
              xs: "flex-start",
              sm: "center",
            }}
          >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <EmailIcon />
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 20,
                }}
                fontWeight={500}
              >
                کد پستی:
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 20,
              }}
              fontWeight={500}
            >
              ۱۶۶۹۶۱۴۱۸۹
            </Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            gap={1}
            alignItems={{
              xs: "flex-start",
              sm: "center",
            }}
          >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <CallIcon />
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 20,
                }}
                fontWeight={500}
              >
                تلفن تماس:
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 20,
              }}
              fontWeight={500}
            >
              02191345910
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ mt: 11.25 }} />
    </>
  );
}

import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
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
          mt: 5,
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0006 15.6682C11.9903 15.6682 10.3606 14.0385 10.3606 12.0282C10.3606 10.0179 11.9903 8.38818 14.0006 8.38818C16.0109 8.38818 17.6406 10.0179 17.6406 12.0282C17.6406 14.0385 16.0109 15.6682 14.0006 15.6682Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                ></path>
                <path
                  d="M23.7754 9.90517C21.477 -0.198168 6.50871 -0.186501 4.22205 9.91683C2.88038 15.8435 6.56705 20.8602 9.79871 23.9635C12.1437 26.2268 15.8537 26.2268 18.2104 23.9635C21.4304 20.8602 25.117 15.8318 23.7754 9.90517Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                ></path>
              </svg>
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16797 23.9168H19.8346C23.3346 23.9168 25.668 22.1668 25.668 18.0835V9.91683C25.668 5.8335 23.3346 4.0835 19.8346 4.0835H8.16797C4.66797 4.0835 2.33464 5.8335 2.33464 9.91683V18.0835C2.33464 22.1668 4.66797 23.9168 8.16797 23.9168Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.16536 10.5L11.817 13.4167C13.0187 14.3733 14.9904 14.3733 16.192 13.4167L19.832 10.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.36964 21.3852C2.36964 21.8052 2.46297 22.2368 2.6613 22.6568C2.85964 23.0768 3.1163 23.4735 3.45464 23.8468C4.0263 24.4768 4.6563 24.9318 5.36797 25.2235C6.06797 25.5152 6.8263 25.6668 7.64297 25.6668C8.83297 25.6668 10.1046 25.3868 11.4463 24.8152C12.788 24.2435 14.1296 23.4735 15.4596 22.5052C16.8013 21.5252 18.073 20.4402 19.2863 19.2385C20.488 18.0252 21.573 16.7535 22.5413 15.4235C23.498 14.0935 24.268 12.7635 24.828 11.4452C25.388 10.1152 25.668 8.8435 25.668 7.63016C25.668 6.83683 25.528 6.0785 25.248 5.3785C24.968 4.66683 24.5246 4.0135 23.9063 3.43016C23.1596 2.69516 22.343 2.3335 21.4796 2.3335C21.153 2.3335 20.8263 2.4035 20.5346 2.5435C20.2313 2.6835 19.963 2.8935 19.753 3.19683L17.0463 7.01183C16.8363 7.3035 16.6846 7.57183 16.5796 7.8285C16.4746 8.0735 16.4163 8.3185 16.4163 8.54016C16.4163 8.82016 16.498 9.10016 16.6613 9.3685C16.813 9.63683 17.0346 9.91683 17.3146 10.1968L18.2013 11.1185C18.3296 11.2468 18.388 11.3985 18.388 11.5852C18.388 11.6785 18.3763 11.7602 18.353 11.8535C18.318 11.9468 18.283 12.0168 18.2596 12.0868C18.0496 12.4718 17.688 12.9735 17.1746 13.5802C16.6496 14.1868 16.0896 14.8052 15.483 15.4235C14.853 16.0418 14.2463 16.6135 13.628 17.1385C13.0213 17.6518 12.5196 18.0018 12.123 18.2118C12.0646 18.2352 11.9946 18.2702 11.913 18.3052C11.8196 18.3402 11.7263 18.3518 11.6213 18.3518C11.423 18.3518 11.2713 18.2818 11.143 18.1535L10.2563 17.2785C9.96464 16.9868 9.68464 16.7652 9.4163 16.6252C9.14797 16.4618 8.87964 16.3802 8.58797 16.3802C8.3663 16.3802 8.13297 16.4268 7.8763 16.5318C7.61964 16.6368 7.3513 16.7885 7.05964 16.9868L3.19797 19.7285C2.89464 19.9385 2.68464 20.1835 2.5563 20.4752C2.43964 20.7668 2.36964 21.0585 2.36964 21.3852Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeMiterlimit="10"
                ></path>
              </svg>
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

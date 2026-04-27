import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import DesktopCart from "./DesktopCart";
import MobileCart from "./MobileCart";

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
        }}
      >
        <Grid container spacing={3} mt={7}>
          <Grid size={12} container direction={"row"} alignItems={"center"}>
            <Grid size={12}>
              <Typography
                variant="h6"
                sx={{
                  color: "text.title",
                  mb: 2,
                  fontSize: "14px",
                  display: {
                    md: "none",
                  },
                }}
                fontWeight={700}
              >
                شمش طلاسی 1 گرمی 18 عیار
              </Typography>
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 4,
                lg: 3,
              }}
              display={"flex"}
              justifyContent={"center"}
            >
              <Stack
                width={{ lg: 250, xs: 280, xl: 280 }}
                height={{ lg: 250, xs: 280, xl: 280 }}
              >
                <Image
                  src={"/images/product.webp"}
                  alt=""
                  width={"280"}
                  height={"280"}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 4,
                lg: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "text.title",
                  mb: 2,
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
                fontWeight={700}
              >
                شمش طلاسی 1 گرمی 18 عیار
              </Typography>
              <Divider
                sx={{
                  borderColor: "#575753",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              />
              <Stack
                direction={"column"}
                gap={2}
                mt={{
                  xs: 0,
                  md: 4,
                }}
                mb={{
                  xs: 4,
                  md: 0,
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={{
                    xs: 12,
                    md: 16,
                  }}
                  sx={{ color: "#ADADA9" }}
                >
                  وزن:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    ۱ گرم
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs: 12,
                    md: 16,
                  }}
                  sx={{ color: "#ADADA9" }}
                >
                  عیار:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    ۱۸ عیار با خلوص ۷۵۰
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs: 12,
                    md: 16,
                  }}
                  sx={{ color: "#ADADA9" }}
                >
                  بسته‌ بندی:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    پلمپ دیجیتال زربد دارای هولوگرام و شماره سریال
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs: 12,
                    md: 16,
                  }}
                  sx={{ color: "#ADADA9" }}
                >
                  کاربرد:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    سرمایه گذاری و هدیه دادن
                  </Box>
                </Typography>
              </Stack>
              <Divider
                sx={{
                  borderColor: "#575753",
                  display: {
                    md: "none",
                  },
                }}
              />
              <Stack
                direction={"row"}
                gap={1}
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
                display={{
                  xs: "flex",
                  md: "none",
                }}
              >
                <Stack>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8307 7.49996C15.8307 8.70829 15.4724 9.81664 14.8557 10.7416C13.9557 12.075 12.5307 13.0166 10.8724 13.2583C10.5891 13.3083 10.2974 13.3333 9.9974 13.3333C9.6974 13.3333 9.40573 13.3083 9.1224 13.2583C7.46406 13.0166 6.03906 12.075 5.13906 10.7416C4.5224 9.81664 4.16406 8.70829 4.16406 7.49996C4.16406 4.27496 6.7724 1.66663 9.9974 1.66663C13.2224 1.66663 15.8307 4.27496 15.8307 7.49996Z"
                      stroke="#C2C2BA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17.7073 15.3917L16.3323 15.7167C16.0239 15.7917 15.7823 16.025 15.7156 16.3333L15.4239 17.5583C15.2656 18.225 14.4156 18.425 13.9739 17.9L9.99893 13.3333L6.02393 17.9083C5.58226 18.4333 4.73226 18.2333 4.57393 17.5667L4.28226 16.3417C4.20726 16.0333 3.96559 15.7917 3.66559 15.725L2.29059 15.4C1.65726 15.25 1.43226 14.4583 1.89059 14L5.14059 10.75C6.04059 12.0833 7.46559 13.025 9.12393 13.2667C9.40726 13.3167 9.69893 13.3417 9.99893 13.3417C10.2989 13.3417 10.5906 13.3167 10.8739 13.2667C12.5323 13.025 13.9573 12.0833 14.8573 10.75L18.1073 14C18.5656 14.45 18.3406 15.2417 17.7073 15.3917Z"
                      stroke="#C2C2BA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.4875 4.98337L10.9792 5.9667C11.0459 6.10003 11.2209 6.23337 11.3792 6.25837L12.2709 6.40837C12.8375 6.50003 12.9709 6.91671 12.5625 7.32504L11.8709 8.01669C11.7542 8.13336 11.6875 8.35837 11.7292 8.52504L11.9292 9.38337C12.0875 10.0584 11.7292 10.325 11.1292 9.96669L10.2959 9.47503C10.1459 9.38336 9.89588 9.38336 9.74588 9.47503L8.91254 9.96669C8.31254 10.3167 7.95421 10.0584 8.11254 9.38337L8.31254 8.52504C8.34588 8.36671 8.28754 8.13336 8.17088 8.01669L7.47921 7.32504C7.07088 6.91671 7.20421 6.50837 7.77088 6.40837L8.66254 6.25837C8.81254 6.23337 8.98754 6.10003 9.05421 5.9667L9.54588 4.98337C9.78754 4.45004 10.2209 4.45004 10.4875 4.98337Z"
                      stroke="#C2C2BA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Stack>
                <Typography
                  variant="body1"
                  fontSize={12}
                  sx={{ color: "#C2C2BA" }}
                >
                  همه محصولات دارای ضمانت اصالت و سلامت کالا می‌باشند.
                </Typography>
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 0,
                md: 4,
              }}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <DesktopCart />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        bgcolor={"#292926"}
        mt={{
          xs: 3,
          md: 8,
        }}
        py={2}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Stack
            width={{
              xs: 16,
              md: 32,
            }}
            height={{
              xs: 16,
              md: 32,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 19.9993C20.9706 19.9993 25 16.1192 25 11.3327C25 6.54621 20.9706 2.66602 16 2.66602C11.0294 2.66602 7 6.54621 7 11.3327C7 16.1192 11.0294 19.9993 16 19.9993Z"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.027 18.0271L10.0137 27.8671C10.0137 29.0671 10.8537 29.6538 11.8937 29.1604L15.467 27.4671C15.7603 27.3205 16.2537 27.3205 16.547 27.4671L20.1337 29.1604C21.1603 29.6404 22.0137 29.0671 22.0137 27.8671V17.7871"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.334 12.3643L15.1522 14.1825L20.0007 9.33398"
                stroke="#ADADA9"
                strokeWidth="1.81818"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Stack>
          <Typography
            variant="h6"
            fontSize={{
              xs: 10,
              md: 16,
            }}
            sx={{ color: "#B2B2BA" }}
          >
            ضمانت اصل بودن کالا
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Stack
            width={{
              xs: 16,
              md: 32,
            }}
            height={{
              xs: 16,
              md: 32,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4951 28.8623H18.502V27.7686H14.4951V28.8623ZM5.9043 14.6328C5.11383 14.6328 4.4707 15.276 4.4707 16.0664V20.54C4.4707 21.3305 5.11384 21.9736 5.9043 21.9736H7.33789V14.6328H5.9043ZM25.6592 21.9736H27.0928C27.883 21.9735 28.5254 21.3304 28.5254 20.54V16.0664C28.5254 15.2761 27.883 14.633 27.0928 14.6328H25.6592V21.9736ZM5.0166 23.624L4.99512 23.6182C3.66681 23.2251 2.69434 21.9939 2.69434 20.54V16.0664C2.69434 14.6125 3.66674 13.3813 4.99512 12.9883L5.0166 12.9824V12.8447C5.01662 9.78942 6.21407 6.90897 8.38867 4.73438C10.5632 2.56013 13.4431 1.36237 16.498 1.3623C19.5532 1.3623 22.4337 2.55992 24.6084 4.73438C26.7831 6.90903 27.9805 9.78948 27.9805 12.8447V12.9824L28.001 12.9883C29.3295 13.3812 30.3018 14.6124 30.3018 16.0664V20.54C30.3018 22.3097 28.8623 23.7498 27.0928 23.75H24.7705C24.2804 23.7497 23.883 23.3524 23.8828 22.8623V13.7451C23.8828 13.2549 24.2803 12.8577 24.7705 12.8574H26.2041V12.8281C26.1951 7.4838 21.8445 3.13867 16.498 3.13867C11.1517 3.1388 6.80102 7.48388 6.79199 12.8281V12.8574H8.22559C8.71605 12.8574 9.11328 13.2547 9.11328 13.7451V22.8623C9.11306 23.3526 8.71592 23.75 8.22559 23.75H6.79199V24.5684C6.79219 26.1449 8.07488 27.4275 9.65137 27.4277H12.6904L12.7188 27.4287V26.8809C12.7188 26.3904 13.117 25.9922 13.6074 25.9922H19.3896C19.8801 25.9922 20.2773 26.3904 20.2773 26.8809V29.751C20.2772 30.2413 19.88 30.6386 19.3896 30.6387H13.6074C13.1171 30.6387 12.7189 30.2413 12.7188 29.751V29.2031H12.6826C12.6806 29.2033 12.6795 29.2041 12.6787 29.2041H9.65137C7.09553 29.2039 5.01677 27.1241 5.0166 24.5684V23.624Z"
                fill="#ADADA9"
                stroke="#ADADA9"
                strokeWidth="0.0572917"
              ></path>
            </svg>
          </Stack>
          <Typography
            variant="h6"
            fontSize={{
              xs: 10,
              md: 16,
            }}
            sx={{ color: "#B2B2BA" }}
          >
            پشتیبانی ۲۴ ساعته
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Stack
            width={{
              xs: 16,
              md: 32,
            }}
            height={{
              xs: 16,
              md: 32,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6662 23.8788C30.6929 24.8788 30.4262 25.8254 29.9462 26.6388C29.6796 27.1188 29.3196 27.5588 28.9196 27.9188C27.9996 28.7721 26.7862 29.2921 25.4396 29.3321C23.4929 29.3721 21.7729 28.3721 20.8262 26.8388C20.3196 26.0521 20.0129 25.1055 19.9996 24.1055C19.9596 22.4255 20.7062 20.9054 21.9062 19.9054C22.8129 19.1588 23.9596 18.6921 25.2129 18.6655C28.1596 18.5988 30.5996 20.9321 30.6662 23.8788Z"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M23.252 24.0384L24.5986 25.3184L27.3853 22.625"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.22656 9.91992L15.9999 16.7332L27.6932 9.95988"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16 28.8121V16.7188"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M28.8141 12.226V19.7727C28.8141 19.8394 28.8142 19.8927 28.8008 19.9593C27.8675 19.146 26.6675 18.666 25.3341 18.666C24.0808 18.666 22.9208 19.106 22.0008 19.8394C20.7741 20.8127 20.0008 22.3194 20.0008 23.9994C20.0008 24.9994 20.2808 25.946 20.7741 26.746C20.8941 26.9594 21.0408 27.1594 21.2008 27.3461L18.7608 28.6927C17.2408 29.5461 14.7608 29.5461 13.2408 28.6927L6.12081 24.746C4.50748 23.8527 3.1875 21.6127 3.1875 19.7727V12.226C3.1875 10.386 4.50748 8.14605 6.12081 7.25271L13.2408 3.30602C14.7608 2.45268 17.2408 2.45268 18.7608 3.30602L25.8808 7.25271C27.4942 8.14605 28.8141 10.386 28.8141 12.226Z"
                stroke="#ADADA9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Stack>
          <Typography
            variant="h6"
            fontSize={{
              xs: 10,
              md: 16,
            }}
            sx={{ color: "#B2B2BA" }}
          >
            ضمانت اصل بودن کالا
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        gap={2}
        px={{
          xs: 2,
          md: 3,
          lg: 5,
        }}
        mt={3}
      >
        <Typography
          variant="h6"
          fontSize={{
            xs: 18,
            sm: 22,
          }}
          sx={{ color: "text.title" }}
        >
          معرفی
        </Typography>
        <Typography
          variant="h6"
          fontSize={{
            xs: 14,
            sm: 16,
          }}
        >
          شمش ۱ گرمی طلاسی با عیار ۱۸ و خلوص ۷۵۰ تولید می‌شود و گزینه مناسب برای
          هدیه دادن به عزیزان و سرمایه گذاری است. وزن پایین و قیمت مناسب این شمش
          باعث می‌شود تا بسیاری از مردم برای حفظ ارزش پول خود یا به‌عنوان
          هدیه‌ای لوکس و خاص اقدام به خرید آن کنند. این شمش دارای پلمپ مخصوص و
          شماره سریال است که به کمک آن می‌توانید اصالت شمش را استعلام بگیرید.
        </Typography>
      </Stack>
      <MobileCart />
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}

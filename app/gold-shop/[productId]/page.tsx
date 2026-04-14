import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Cart from "./Cart";

export default function page() {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ px: "40px !important" }}>
        <Grid container spacing={3} mt={7}>
          <Grid size={12} container direction={"row"} alignItems={"center"}>
            <Grid size={3}>
              <Image
                src={"/images/product.webp"}
                alt=""
                width={"288"}
                height={"288"}
              />
            </Grid>
            <Grid size={6}>
              <Typography
                variant="h6"
                sx={{ color: "text.title", mb: 2 }}
                fontWeight={700}
              >
                شمش طلاسی 1 گرمی 18 عیار
              </Typography>
              <Divider sx={{ borderColor: "#575753" }} />
              <Stack direction={"column"} gap={2} mt={4}>
                <Typography variant="body1" sx={{ color: "#ADADA9" }}>
                  وزن:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                  >
                    ۱ گرم
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: "#ADADA9" }}>
                  عیار:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                  >
                    ۱۸ عیار با خلوص ۷۵۰
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: "#ADADA9" }}>
                  بسته‌بندی:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                  >
                    پلمپ دیجیتال زربد دارای هولوگرام و شماره سریال
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  کاربرد:{" "}
                  <Box
                    component={"span"}
                    color={"text.primary"}
                    fontWeight={"500"}
                  >
                    سرمایه گذاری و هدیه دادن
                  </Box>
                </Typography>
              </Stack>
            </Grid>
            <Grid size={3}>
              <Cart />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        bgcolor={"#292926"}
        mt={8}
        py={2}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <svg
            width="32"
            height="32"
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
          <Typography variant="h6" fontSize={16} sx={{ color: "#B2B2BA" }}>
            ضمانت اصل بودن کالا
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <svg
            width="32"
            height="32"
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
          <Typography variant="h6" fontSize={16} sx={{ color: "#B2B2BA" }}>
            پشتیبانی ۲۴ ساعته
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <svg
            width="32"
            height="32"
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
          <Typography variant="h6" fontSize={16} sx={{ color: "#B2B2BA" }}>
            ضمانت اصل بودن کالا
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"column"} gap={2} px={5} mt={3}>
        <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
          معرفی
        </Typography>
        <Typography variant="h6" fontSize={16}>
          شمش ۱ گرمی طلاسی با عیار ۱۸ و خلوص ۷۵۰ تولید می‌شود و گزینه مناسب برای
          هدیه دادن به عزیزان و سرمایه گذاری است. وزن پایین و قیمت مناسب این شمش
          باعث می‌شود تا بسیاری از مردم برای حفظ ارزش پول خود یا به‌عنوان
          هدیه‌ای لوکس و خاص اقدام به خرید آن کنند. این شمش دارای پلمپ مخصوص و
          شماره سریال است که به کمک آن می‌توانید اصالت شمش را استعلام بگیرید.
        </Typography>
      </Stack>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}

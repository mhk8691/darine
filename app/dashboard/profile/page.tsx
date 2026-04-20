import Card from "@/app/Components/Container/Container";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import BotButton from "./BotButton";
import ChangeNumber from "./ChangeNumber";
import ChangePassword from "./ChangePassword";

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={6}>
        <Card>
          <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
            اطلاعات پروفایل شما
          </Typography>
          <Stack direction={"row"} gap={2} alignItems={"center"} mt={5}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                fill="#DDDDDB"
              ></path>
              <path
                d="M64.8021 56.5424C64.9502 57.1434 64.9549 57.7709 64.8156 58.374C64.6764 58.9771 64.3972 59.539 64.0006 60.0143C61.0678 63.5323 57.3975 66.3626 53.2496 68.3049C49.1017 70.2472 44.5776 71.254 39.9974 71.254C35.4173 71.254 30.8932 70.2472 26.7453 68.3049C22.5974 66.3626 18.9271 63.5323 15.9943 60.0143C15.5977 59.539 15.3185 58.9771 15.1792 58.374C15.04 57.7709 15.0446 57.1434 15.1927 56.5424C16.5539 51.0191 19.7189 46.1077 24.1865 42.5862C24.8529 42.0637 25.6722 41.7743 26.5189 41.7621C27.3656 41.75 28.1929 42.0159 28.874 42.519C31.8427 44.7268 35.7349 46.0643 39.9912 46.0643C44.2474 46.0643 48.1381 44.7268 51.1084 42.519C51.7895 42.0159 52.6168 41.75 53.4635 41.7621C54.3101 41.7743 55.1295 42.0637 55.7959 42.5862C60.2681 46.1058 63.4376 51.0174 64.8021 56.5424Z"
                fill="white"
              ></path>
              <path
                d="M39.9984 40.9031C47.928 40.9031 54.3562 34.4749 54.3562 26.5453C54.3562 18.6157 47.928 12.1875 39.9984 12.1875C32.0688 12.1875 25.6406 18.6157 25.6406 26.5453C25.6406 34.4749 32.0688 40.9031 39.9984 40.9031Z"
                fill="white"
              ></path>
            </svg>
            <Stack>
              <Typography
                variant="h6"
                fontSize={22}
                fontWeight={600}
                sx={{ color: "text.title" }}
              >
                محمد حسین کابلی
              </Typography>
              <Typography variant="h6" fontSize={18}>
                09961250980
              </Typography>
            </Stack>
          </Stack>
         <ChangePassword/>
          <Stack
            border={1}
            px={2}
            py={3}
            borderColor={"background.paper"}
            borderRadius={2}
            mt={2}
          >
            <Stack
              py={"10px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ADADA9" }}
                fontSize={14}
              >
                تاریخ تولد
              </Typography>
              <Typography variant="body2" fontSize={18}>
                ۱۰ اردیبهشت ۱۳۸۶
              </Typography>
            </Stack>
            <Divider />
            <Stack
              py={"10px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ADADA9" }}
                fontSize={14}
              >
                کدملی
              </Typography>
              <Typography variant="body2" fontSize={18}>
                ۰۳۷۳۱۲۸۹۹۱
              </Typography>
            </Stack>
            <Divider />
            <Stack
              py={"10px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ADADA9" }}
                fontSize={14}
              >
                درصد کارمزد خرید
              </Typography>
              <Typography variant="body2" fontSize={18}>
                ۱
              </Typography>
            </Stack>
            <Divider />
            <Stack
              pt={"10px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ADADA9" }}
                fontSize={14}
              >
                درصد کارمزد فروش
              </Typography>
              <Typography variant="body2" fontSize={18}>
                ۱
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card>
          <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
            فعالسازی ربات تلگرام
          </Typography>
          <Typography variant="h6" fontSize={16} mt={2.5}>
            شما می‌توانید در این بخش، ارسال کد ورود به پنل کاربری طلاسی را در
            حساب تلگرام خود را فعال کنید، تا در مواقع اختلال در زیرساخت‌های
            مخابراتی، بتوانید به راحتی وارد حساب طلاسی خود شوید.
          </Typography>
          <Stack direction={"row"} gap={2} width={"100%"} mt={5}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 20,
                py: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                width: "100%",
                borderRadius: 2,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3125_56770)">
                  <path
                    d="M27.4595 2.29923C27.2379 2.09645 26.9664 1.95632 26.6727 1.89322C26.379 1.83013 26.0739 1.84634 25.7886 1.9402L1.1689 10.0559C0.497934 10.277 0.0429343 10.876 0.009739 11.5816C-0.0234016 12.2873 0.373356 12.9263 1.02053 13.2095L7.10916 15.8735L8.94617 24.3935C9.02246 24.7475 9.20211 25.0627 9.58268 25.1597C9.96762 25.2577 10.2396 25.0474 10.5268 24.8323L15.0451 21.4491L20.3273 25.7715C20.635 26.0234 21.011 26.1548 21.3944 26.1548C21.5802 26.1546 21.7647 26.124 21.9405 26.0642C22.4965 25.8757 22.9086 25.4219 23.043 24.8505L27.963 3.93241C28.0316 3.64 28.0211 3.3346 27.9326 3.04758C27.8441 2.76056 27.6809 2.50226 27.4595 2.29923ZM10.9204 17.4C10.9174 17.4071 10.9144 17.4151 10.9116 17.4247L9.89314 20.9832L8.75651 15.7116L16.5723 11.3691L11.1079 17.0827C11.0222 17.1729 10.9581 17.2814 10.9204 17.4ZM11.2436 22.2412L11.7062 20.6249L12.1487 19.0789L13.7342 20.3763L11.2436 22.2412ZM26.3622 3.55584L21.4422 24.4739C21.4397 24.4843 21.4365 24.4986 21.4124 24.5068C21.3886 24.5149 21.377 24.5056 21.3688 24.4988L15.5888 19.769L12.9104 17.5772L21.514 8.58123C21.6499 8.43905 21.7304 8.25282 21.7408 8.05637C21.7512 7.85991 21.6908 7.66623 21.5706 7.51051C21.4503 7.35476 21.2783 7.24729 21.0856 7.2076C20.8929 7.16791 20.6923 7.19865 20.5203 7.29422L7.78083 14.3724L1.67973 11.7029C1.66114 11.6948 1.65091 11.6903 1.65239 11.6588C1.65386 11.6275 1.66447 11.6239 1.68372 11.6176L26.3034 3.50197C26.3153 3.49808 26.3288 3.4936 26.3486 3.51165C26.3683 3.5298 26.3651 3.54359 26.3622 3.55584Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.35"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3125_56770">
                    <rect width="28" height="28" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <Box component={"span"}>شروع ربات</Box>
            </Button>
            <BotButton />
          </Stack>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card>
          <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
            تغییر شماره تلفن
          </Typography>
          <ChangeNumber />
        </Card>
      </Grid>
    </Grid>
  );
}

import Card from "@/app/Components/Card/Card";
import { Divider, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid
        size={12}
        container
        bgcolor={"background.default"}
        border={1}
        borderColor={"background.paper"}
        py={3}
        px={4}
        alignItems={'center'}
        borderRadius={2.5}
      >
        <Grid size={7.5}>
          <Typography variant="h6" sx={{ color: "text.title" }} fontSize={22}>
            دعوت از دوستان
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mt: 2.5 }}
            fontSize={18}
          >
            با دعوت از دوستان خود ۲۰ درصد از کارمزد هر خرید آن‌ها، برای شما
            واریز خواهد شد.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.title", mt: 3 }}
            fontSize={20}
            fontWeight={500}
          >
            کد دعوت شما
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={320}
            bgcolor={"background.paper"}
            px={4}
            py={1.5}
            borderRadius={2}
            mt={3}
            component={"div"}
            // onClick={() =>
            //   navigator.clipboard.readText("talasea.ir/onboarding?r=WuxwOhzW")
            // }
          >
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <SvgIcon color="primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.168 11.1666V13.6666C14.168 17 12.8346 18.3333 9.5013 18.3333H6.33464C3.0013 18.3333 1.66797 17 1.66797 13.6666V10.5C1.66797 7.16665 3.0013 5.83331 6.33464 5.83331H8.83464"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14.1693 11.1666H11.5026C9.5026 11.1666 8.83594 10.5 8.83594 8.49998V5.83331L14.1693 11.1666Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.66797 1.66669H13.0013"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.83203 4.16669C5.83203 2.78335 6.9487 1.66669 8.33203 1.66669H10.5154"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.3339 6.66669V11.825C18.3339 13.1167 17.2839 14.1667 15.9922 14.1667"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.332 6.66669H15.832C13.957 6.66669 13.332 6.04169 13.332 4.16669V1.66669L18.332 6.66669Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </SvgIcon>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary" }}
                fontSize={18}
              >
                کپی کد
              </Typography>
            </Stack>
            <Typography variant="h6" fontSize={20}>
              WuxwOhzW
            </Typography>
          </Stack>
          <Card
            style={{
              px: 4,
              py: 3,
              mt: 3.5,
            }}
          >
            <Typography variant="h6" fontSize={14} sx={{ color: "text.title" }}>
              خلاصه فعالیت شما
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} mt={2.5}>
              <Typography variant="h6" fontSize={12} sx={{ color: "#C2C2BA" }}>
                مجموع کاربران دعوت شده توسط شما:
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                sx={{ color: "text.title" }}
              >
                ۰ نفر
              </Typography>
            </Stack>
            <Divider sx={{ my: 1.5 }} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h6" fontSize={12} sx={{ color: "#C2C2BA" }}>
                مجموع کاربران دعوت شده توسط شما:
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                sx={{ color: "text.title" }}
              >
                ۰ نفر
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid size={4.5} >
          <Image
            alt=""
            src={"/images/mainDark.webp"}
            width={450}
            height={200}
            style={{ objectFit: "contain", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

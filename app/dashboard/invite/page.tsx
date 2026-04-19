import Card from "@/app/Components/Container/Container";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import RefralButton from "./RefralButton";

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
        alignItems={"center"}
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
          <RefralButton />
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
        <Grid size={4.5}>
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

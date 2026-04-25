import Card from "@/app/Components/Container/Container";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import RefralButton from "./RefralButton";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "دعوت از دوستان | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid
        size={12}
        container
        bgcolor={"background.default"}
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: "background.paper",
        }}
        py={3}
        px={{
          xs: 0,
          sm: 4,
        }}
        alignItems={"center"}
        borderRadius={2.5}
      >
        <Grid
          size={12}
          display={{
            xs: "none",
            sm: "block",
            md: "none",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "text.title",
            }}
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            دعوت از دوستان
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 7,
            lg: 7,
          }}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "text.title",
              display: {
                xs: "none",
                md: "block",
              },
            }}
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            دعوت از دوستان
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mt: {
                xs: 0,
                sm: 2.5,
              },
            }}
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            با دعوت از دوستان خود ۲۰ درصد از کارمزد هر خرید آن‌ها، برای شما
            واریز خواهد شد.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.title", mt: 3 }}
            fontSize={{
              xs: 16,
              sm: 20,
            }}
            fontWeight={500}
          >
            کد دعوت شما
          </Typography>
          <RefralButton />
          <Card
            style={{
              px: {
                xs: 2,
                sm: 4,
              },
              py: {
                xs: 1.5,
                sm: 3,
              },
              mt: 3.5,
            }}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              sx={{ color: "text.title" }}
            >
              خلاصه فعالیت شما
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} mt={2.5}>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#C2C2BA" }}
              >
                مجموع کاربران دعوت شده توسط شما:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: "text.title" }}
              >
                ۰ نفر
              </Typography>
            </Stack>
            <Divider sx={{ my: 1.5 }} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#C2C2BA" }}
              >
                مجموع کاربران دعوت شده توسط شما:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: "text.title" }}
              >
                ۰ نفر
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 5,
            lg: 5,
          }}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Stack
              width={{
                xs: "90%",
                sm: "60%",
                md: "100%",
              }}
            >
              <Image
                alt=""
                width={417}
                height={185}
                src={"/images/mainDark.webp"}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

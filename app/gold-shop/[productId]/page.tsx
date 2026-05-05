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

export default function Page({ params }: { params: { productId: string } }) {
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
                  display: { md: "none" },
                }}
                fontWeight={700}
              >
                محصول شماره {params.productId}
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, md: 4, lg: 3 }}
              display={"flex"}
              justifyContent={"center"}
            >
              <Stack
                width={{ lg: 250, xs: 280, xl: 280 }}
                height={{ lg: 250, xs: 280, xl: 280 }}
              >
                <Image
                  src={"/images/product.webp"}
                  alt="product"
                  width={280}
                  height={280}
                  style={{ width: "100%", height: "100%" }}
                />
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 5 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "text.title",
                  mb: 2,
                  display: { xs: "none", md: "block" },
                }}
                fontWeight={700}
              >
                شمش طلاسی 1 گرمی 18 عیار
              </Typography>

              <Divider
                sx={{
                  borderColor: "#575753",
                  display: { xs: "none", md: "block" },
                }}
              />

              <Stack
                direction={"column"}
                gap={2}
                mt={{ xs: 0, md: 4 }}
                mb={{ xs: 4, md: 0 }}
              >
                <Typography
                  sx={{ color: "text.subtitle" }}
                  fontSize={{ xs: 12, md: 16 }}
                >
                  وزن:{" "}
                  <Box component="span" color="text.primary">
                    ۱ گرم
                  </Box>
                </Typography>

                <Typography
                  sx={{ color: "text.subtitle" }}
                  fontSize={{ xs: 12, md: 16 }}
                >
                  عیار:{" "}
                  <Box component="span" color="text.primary">
                    ۱۸ عیار
                  </Box>
                </Typography>

                <Typography
                  sx={{ color: "text.subtitle" }}
                  fontSize={{ xs: 12, md: 16 }}
                >
                  کاربرد:{" "}
                  <Box component="span" color="text.primary">
                    سرمایه گذاری
                  </Box>
                </Typography>
              </Stack>

              <Divider
                sx={{ borderColor: "#575753", display: { md: "none" } }}
              />

              <Stack
                direction={"row"}
                gap={1}
                mt={2}
                display={{ xs: "flex", md: "none" }}
              >
                <Typography fontSize={12} sx={{ color: "text.muted" }}>
                  ضمانت اصالت کالا
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 0, md: 4 }} display={{ xs: "none", md: "flex" }}>
              <DesktopCart />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <MobileCart />
    </>
  );
}

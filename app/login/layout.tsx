import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <Container maxWidth={"lg"} sx={{ mt: 3, mb: 5, px: "40px !important" }}>
      <Grid container>
        <Grid
          size={6.5}
          sx={{
            boxShadow: "0 0 15px #1C1C1B",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            p: 8,
          }}
        >
          <Stack mb={5}>
            <Image
              src={"/images/logoDark.svg"}
              width={200}
              height={100}
              alt=""
              style={{
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Stack>
          {children}
        </Grid>
        <Grid
          size={5.5}
          p={8}
          sx={{
            background: `linear-gradient(
120deg,
 #616055 0%,
  #B2A467 50%,
  #DAC670 100%
)`,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={"/images/login2.webp"}
              width={365}
              height={290}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
            <Stack direction={"column"} alignItems={"center"} gap={2.5} mt={10}>
              <Typography
                variant="h6"
                fontSize={20}
                sx={{ color: "#10100F" }}
                fontWeight={600}
              >
                طلاسی پلتفرم خرید و فروش طلا بدون اجرت
              </Typography>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ color: "background.paper" }}
              >
                طلاسی بستر آنلاین خرید و فروش طلا
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

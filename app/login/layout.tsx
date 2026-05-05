import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <Container maxWidth={"lg"} sx={{ my: 2 }}>
      <Grid container>
        <Grid
          order={{
            xs: 2,
            md: 1,
          }}
          size={{
            xs: 12,
            md: 7,
            lg: 6,
          }}
          sx={{
            boxShadow: {
              md: "0 0 15px #1C1C1B",
            },
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            border: {
              xs: 0,
              md: 1,
            },
            borderColor: {
              md: "#1C1C1B",
            },
            p: {
              xs: 0,
              md: 8,
            },
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Stack
            maxWidth={{
              xs: "468px",
              md: "100%",
            }}
            width={{
              xs: "468px",
              md: "100%",
            }}
          >
            <Stack
              mb={4}
              display={{
                xs: "none",
                md: "flex",
              }}
              direction={"row"}
              justifyContent={"center"}
            >
              <Image
                src={"/images/darineh.png"}
                width={120}
                height={120}
                alt=""
                style={{
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Stack>
            {children}
          </Stack>
        </Grid>
        <Grid
          order={{
            xs: 1,
            md: 2,
          }}
          size={{
            xs: 12,
            md: 5,
            lg: 6,
          }}
          p={{
            xs: 0,
            md: 8,
          }}
          sx={{
            background: {
              xs: "bakcground.default",
              md: `linear-gradient(
120deg,
 #616055 0%,
  #B2A467 50%,
  #DAC670 100%
)`,
            },
            borderTopRightRadius: {
              xs: 0,
              md: 20,
            },
            borderBottomRightRadius: {
              xs: 0,
              md: 20,
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              width={{
                xs: 220,
                md: 365,
              }}
              height={{
                xs: 220,
                md: 290,
              }}
            >
              <Image
                src={"/images/login2.webp"}
                width={365}
                height={290}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              gap={2.5}
              mt={10}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Typography
                variant="h6"
                fontSize={20}
                sx={{ color: "background.default" }}
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

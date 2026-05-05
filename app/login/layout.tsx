import { Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import LoginBanner from "./LoginBanner";

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
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            border: {
              xs: 0,
              md: 1,
            },
            borderColor: {
              md: "background.paper",
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
  <LoginBanner/>
      </Grid>
    </Container>
  );
}

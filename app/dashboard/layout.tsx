import React, { ReactNode } from "react";
import AppBar from "../Components/AppBar/AppBar";
import { Container, Divider, Stack } from "@mui/material";
interface Props {
  children: ReactNode;
}
export default function layout({ children }: Props) {
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
          bgcolor: {
            xs: "background.default",
            sm: "background.paper",
          },
          position: "relative",
        }}
      >
        <Stack
          py={{
            xs: 0,
            sm: 4,
          }}
        >
          <AppBar />
        </Stack>
        <Stack
          pb={{
            xs: 3,
            sm: 8,
          }}
        >
          {children}
        </Stack>
      </Container>
      <Divider
        sx={{
          display: {
            sm: "none",
          },
        }}
      />
    </>
  );
}

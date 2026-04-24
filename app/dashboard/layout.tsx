import React, { ReactNode } from "react";
import AppBar from "../Components/AppBar/AppBar";
import { Container, Stack } from "@mui/material";
interface Props {
  children: ReactNode;
}
export default function layout({ children }: Props) {
  return (
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
      <Stack py={4}>
        <AppBar />
      </Stack>
      <Stack pb={8}>{children}</Stack>
    </Container>
  );
}

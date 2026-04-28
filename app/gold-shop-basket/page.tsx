import { Container, Divider } from "@mui/material";
import Cart from "./Cart";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "خرید شمش طلا 18 و 24 عیار آنلاین و قیمت روز | دارینه",
  description: "",
};
export default function page() {
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          mt: 5,
          px: {
            xs: "16px !important",
            md: "24px !important",
            lg: "40px !important",
          },
        }}
      >
        <Cart />
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}

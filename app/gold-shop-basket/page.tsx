import { Container, Divider } from "@mui/material";
import Cart from "./Cart";

export default function page() {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ mt: 5, px: "40px !important" }}>
        <Cart />
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}

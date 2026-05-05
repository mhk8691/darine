import Container from "@/app/Components/Container/Container";
import { Typography } from "@mui/material";

export default function Chart() {
  return (
    <Container
      style={{
        justifyContent: "center",
        flexDirection: "row",
        alignItems: {
          sm: "center",
          xs:'flex-start'
        },
        mt: 3,
        height: {
          xs: "200px",
          sm: "60px",
        },
      }}
    >
      <Typography variant="h2" fontSize={12}>
        نمودار دارایی پس از ۲ روز بعد از اولین خرید شما فعال میشود.
      </Typography>
    </Container>
  );
}

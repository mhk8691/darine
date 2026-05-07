import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Container from "./Components/Containers/Container/Container";

export default function notfound() {
  return (
    <Container
      style={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
      }}
    >
      <Image src={"/images/404.webp"} alt="" width={260} height={260} />
      <Typography
        variant="h6"
        fontSize={{
          xs: 20,
          sm: 30,
        }}
        fontWeight={500}
        sx={{ mt: 7, textAlign: "center" }}
      >
        صفحه‌ای که دنبالش بودید پیدا نشد
      </Typography>
      <Typography
        variant="h6"
        fontSize={{
          xs: 14,
          sm: 18,
        }}
        fontWeight={300}
        sx={{ mt: 2.5, textAlign: "center" }}
      >
        به صفحه اصلی بازگردید یا از منوی سایت برای یافتن محتوای دیگر استفاده
        کنید.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          py: 1.5,
          fontSize: {
            xs: 16,
            sm: 22,
          },
          color: "background.default",
          mt: 6,
          borderRadius: 2,
          px: 5,
        }}
      >
        <Link href={"/dashboard"}>بازگشت به صفحه اصلی</Link>
      </Button>
    </Container>
  );
}

import Image from "next/image";
import Container from "./Components/Container/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function notfound() {
  return (
    <Container
      style={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border:'none'
      }}
    >
      <Image src={"/images/404.webp"} alt="" width={260} height={260} />
      <Typography variant="h6" fontSize={30} fontWeight={500} sx={{ mt: 7, }}>
        صفحه‌ای که دنبالش بودید پیدا نشد
      </Typography>
      <Typography variant="h6" fontSize={18} fontWeight={300} sx={{ mt: 2.5 }}>
        به صفحه اصلی بازگردید یا از منوی سایت برای یافتن محتوای دیگر استفاده
        کنید.
      </Typography>
      <Link href={"/dashboard"}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            py: 1.5,
            fontSize: 22,
            color: "#10100F",
            mt: 6,
            borderRadius: 2,
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </Container>
  );
}

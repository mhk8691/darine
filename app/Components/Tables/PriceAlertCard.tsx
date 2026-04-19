import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Container from "../Container/Container";
import Link from "next/link";

export default function PriceAlertCard() {
  return (
    <Container
      style={{
        px: 2,
        border: 1,
        borderColor: "background.paper",
        width: "50%",
        pt: 4,
        pb: 2,
        height: "100%",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack>
          <Typography variant="body1" fontSize={16}>
            با آلارم قیمت
          </Typography>
          <Typography
            variant="body2"
            fontSize={10}
            sx={{ color: "#C2C2BA", mt: 1 }}
          >
            دیگه هیچ نوسان قیمتی از چشمت دور نمی‌مونه.
          </Typography>
        </Stack>
        <Image alt="" src={"/images/alert.webp"} width={82} height={73} />
      </Stack>
      <Link href={"/dashboard/price-alert"}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: 12,
            fontWeight: "600",
            borderRadius: 2,
            py: 1,
            mt: 2,
            width: "100%",
          }}
        >
          فعالسازی آلارم
        </Button>
      </Link>
    </Container>
  );
}

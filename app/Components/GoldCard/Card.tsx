import priceFormater from "@/app/core/PriceFormater";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";

export default function GoldCard() {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: "#393936",
        background: "rgb(28, 28, 27)",
        p: 1.5,
        borderRadius: 1.5,
      }}
    >
      <Stack bgcolor={"background.default"} px={0} py={4} borderRadius={2}>
        <CardMedia
          sx={{
            height: 140,
            p: 0,
          }}
          image="/images/product.webp"
          title="green iguana"
        />
      </Stack>
      <CardContent sx={{ px: 0 }}>
        <Typography gutterBottom variant="h5" fontSize={18} sx={{ px: .5 }}>
          شمش طلاسی ۱ گرمی ۱۸ عیار
        </Typography>
        <Stack direction={"column"} gap={1} sx={{ mt: 3.5 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
              وزن{" "}
              <Box component={"span"} fontSize={10}>
                (معادل ۱۸ عیار)
              </Box>
              :
            </Typography>
            <Typography variant="body1" fontSize={16}>
              ۲.۵{" "}
              <Box component={"span"} fontSize={14}>
                گرم
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
              گرم طلا:
            </Typography>
            <Typography variant="body1" fontSize={16}>
              ۱.۰۷۵
              <Box component={"span"} fontSize={14}>
                گرم
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
              ارزش تومان:
            </Typography>
            <Typography variant="body1" fontSize={16}>
              {priceFormater(19330693)}{" "}
              <Box component={"span"} fontSize={14}>
                تومان
              </Box>
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          borderRadius: 2,
          width: "100%",
          mt: 3,
          py: 1.5,
          fontSize: 16,
          mb: 1,
        }}
      >
        افزودن به سبد خرید
      </Button>
    </Card>
  );
}

import { Box, Stack, Typography } from "@mui/material";
import priceFormater from "../../core/PriceFormater";
import CircleAnimation from "../CircleAnimation/CircleAnimation";

export default function TopPrice() {
  return (
    <Stack direction={"row"} alignItems={"center"} mt={1} gap={2}>
      <CircleAnimation type="red" />
      <Stack direction={"row"} alignItems={"center"} gap={0.5}>
        <Typography
          variant="body2"
          fontSize={{
            xs: 10,
            sm: 12,
          }}
          sx={{ color: "#C2C2BA" }}
        >
          قیمت الان:
        </Typography>
        <Typography
          variant="h6"
          fontSize={{
            xs: 20,
            sm: 22,
          }}
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box component={"span"}>{priceFormater(18076000)}</Box>
          <Box component={"span"} fontSize={{ xs: 12, sm: 14 }}>
            تومان
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{ mr: 0.5 }}
          color="error"
          fontSize={{ xs: 10, sm: 16 }}
        >
          {new Intl.NumberFormat("fa-IR").format(1.11)} -%
        </Typography>
      </Stack>
    </Stack>
  );
}

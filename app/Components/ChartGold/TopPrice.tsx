import { Stack, Typography } from "@mui/material";
import priceFormater from "../../core/PriceFormater";

export default function TopPrice() {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={0.5} mt={1}>
      <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
        قیمت الان:
      </Typography>
      <Typography variant="h6" fontSize={22}>
        {priceFormater(18076000)}
      </Typography>
      <Typography variant="body1" sx={{ mr: 0.5 }} color="error">
        {(1.11).toLocaleString()} -%
      </Typography>
    </Stack>
  );
}

import { Divider, Stack, Typography } from "@mui/material";
import ProductSlider from "./ProductSlider";
interface Props {
  title: string;
}
export default function ProductsContainer({ title }: Props) {
  return (
    <Stack direction={'column'} gap={3}>
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        <Typography variant="body1" fontSize={22} sx={{ whiteSpace: "nowrap" }}>
          {title}
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
      <ProductSlider />
    </Stack>
  );
}

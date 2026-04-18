import { Box, Divider, Stack, SxProps, Typography } from "@mui/material";
import priceFormater from "../../core/PriceFormater";

export default function BottomPrice({
  priceStyle,
  dividerStyle,
}: {
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
}) {
  return (
    <>
      <Divider sx={dividerStyle} />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1.5}
        mb={1}
        px={2}
        sx={priceStyle}
      >
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{ color: "#C2C2BA" }}>
            بالاترین قیمت
          </Typography>
          <Typography variant="body1" sx={{ color: "text.title" }}>
            {priceFormater(18680000)}
            <Box component={"span"} fontSize={14}>
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{ color: "#C2C2BA" }}>
            پایین‌ترین قیمت
          </Typography>
          <Typography variant="body1" sx={{ color: "text.title" }}>
            {priceFormater(16320000)}
            <Box component={"span"} fontSize={14}>
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{ color: "#C2C2BA" }}>
            بالاترین قیمت
          </Typography>
          <Typography variant="body1" color="error">
            {(1.11).toLocaleString()}{" "}
            <Box component={"span"} fontSize={14}>
              درصد
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

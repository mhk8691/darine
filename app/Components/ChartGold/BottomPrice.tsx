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
        sx={priceStyle}
      >
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "text.muted" }}
          >
            بالاترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.primary" }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(18680000)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
              ml={0.5}
            >
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "text.muted" }}
          >
            پایین‌ترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.primary" }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(16320000)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
              ml={0.5}
            >
              تومان
            </Box>
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "text.muted" }}
          >
            تغییرات قیمت
          </Typography>
          <Typography
            variant="body1"
            color="error"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {new Intl.NumberFormat("fa-IR").format(1.11)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
            >
              درصد
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

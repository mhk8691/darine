import { Box, Stack, Typography } from "@mui/material";

export default function Status() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      bgcolor={"#393936"}
      py={2}
      px={5}
      mt={1}
    >
      <Typography variant="body1" sx={{ color: "text.title" }} fontSize={16}>
        قیمت لحظه ای طلا ۱۸ عیار(گرمی): 17,799,000 تومان{" "}
        <Box component={"span"} color={"error.dark"}>
          %-1.14
        </Box>
      </Typography>
      <Typography variant="body1" sx={{ color: "text.title" }} fontSize={16}>
        قیمت لحظه ای طلا 24 عیار(گرمی): 23,613,340 تومان{" "}
        <Box component={"span"} color={"error.dark"}>
          %-1.14
        </Box>
      </Typography>
      <Stack direction={'row'} alignItems={'center'} gap={1.5}>
        <Typography variant="body2" fontSize={16}>
          امروز:
        </Typography>
        <Typography variant="body2" fontSize={16} sx={{color:'text.title'}}>
          سه‌شنبه ۲۵ فروردین ۱۴۰۵ -۱۶:۳۲:۳۲
        </Typography>
      </Stack>
    </Stack>
  );
}

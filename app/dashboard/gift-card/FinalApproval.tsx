import { Divider, Stack, Typography } from "@mui/material";

export default function FinalApproval() {
  return (
    <Stack
      border={1}
      px={4}
      py={2}
      borderRadius={2}
      borderColor={"background.paper"}
    >
      <Typography
        variant="body1"
        fontSize={{
          xs: 12,
          sm: 18,
        }}
        sx={{ mb: 3 }}
      >
        اطلاعات کارت هدیه
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          وزن طلا
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          1 گرم
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          قیمت هر گرم طلا
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          ۱۷,۶۱۰,۰۰۰ تومان
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          معادل تومان
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          ۱۷,۶۱۰,۰۰۰ تومان
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          تعداد
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          ۱ گرم
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          کارمزد و مالیات بر ارزش افزوده
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          ۲۵۵,۳۴۴ تومان
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          هزینه بسته‌بندی
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          ۱۸۰,۰۰۰ تومان
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          مبلغ نهایی
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
          fontWeight="bold"
        >
          ۱۸,۰۴۵,۳۴۵ تومان
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        fontSize={{
          xs: 12,
          sm: 18,
        }}
        fontWeight={500}
        sx={{ my: 3 }}
      >
        اطلاعات ارسال
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          زمان ارسال
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          5 تا روز کاری
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          هزینه ارسال
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          رایگان
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          کدپستی
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          3791111111
        </Typography>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 2,
          },
        }}
      />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            sm: 14,
          }}
          sx={{ color: "text.muted" }}
        >
          آدرس
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
        >
          1
        </Typography>
      </Stack>
    </Stack>
  );
}

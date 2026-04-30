import { InfoOutlineRounded } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FilterToggleButton from "../Components/FilterToggleButton/FilterToggleButton";
import { ToggleItemsType } from "../core/Types";
import ChooseAddress from "../Components/ChooseAddress/ChooseAddress";

const toggleItems: ToggleItemsType[] = [
  { title: "تحویل درب منزل", value: "delivery", id: 1 },
  { title: "تحویل حضوری", value: "directDelivery", id: 2 },
];

export default function Delivery() {
  const [select, setSelect] = useState("delivery");
  const [open, setOpen] = useState(false);
  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          xs: 12,
          md: 7.5,
        }}
      >
        {/* <Typography variant="body1" fontSize={22} sx={{ mb: 2 }}>
          نحوه تحویل
        </Typography> */}
        <FilterToggleButton
          select={select}
          setSelect={setSelect}
          items={toggleItems}
          style={{ py: 1.5 }}
        />
        {/* <Typography
          variant="body1"
          fontSize={16}
          fontWeight={"bold"}
          sx={{ mt: 3 }}
        >
          تاریخ تحویل
        </Typography>
        <Typography variant="body1" fontSize={16}>
          سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
        </Typography> */}
        <ChooseAddress
          open={open}
          setOpen={setOpen}
          description="برای دریافت کالای انتخاب شده، ابتدا آدرس خود را اضافه کنید"
          cardStyle={{mt:3}}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.5,
        }}
        border={{
          xs: 1,
          md: 1,
        }}
        borderColor={{
          xs: "background.paper",
          md: "background.default",
        }}
        p={{
          xs: 2,
          md: 0,
        }}
        borderRadius={2}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <InfoOutlineRounded sx={{ color: "#EF8011" }} />
          <Typography variant="body1" fontSize={22} sx={{ color: "#EF8011" }}>
            توجه
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="body1"
            fontSize={{
              xs: 14,
              md: 18,
            }}
            sx={{ color: "#D9D9D3", fontWeight: "600", mt: "10px" }}
          >
            {select === "delivery"
              ? "تحویل امن طلا به سرتاسر ایران"
              : "تحویل حضوری طلای شما"}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              md: 16,
            }}
            sx={{ color: "#D9D9D3", mt: 1 }}
          >
            {select === "delivery"
              ? "طلاسی طلای شما را از ۳۰ سوت، به هر نقطه از کشور که بخواهید ارسال می‌کند. تمامی مرسولات ارسالی بیمه می‌شوند؛ در صورت بروز هرگونه خسارت، جبران آن با طلاسی است."
              : "برای تحویل حضوری، لطفاً کارت شناسایی خود را همراه داشته باشید. مراجعه تنها در ساعت و آدرس تعیین‌شده امکان‌پذیر است."}
          </Typography>
          {/* {select === "delivery" && (
            <Typography
              variant="body1"
              fontSize={16}
              sx={{ color: "#D9D9D3", fontWeight: "600", mt: 1 }}
            >
              سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
            </Typography>
          )} */}
        </Stack>
      </Grid>
    </Grid>
  );
}

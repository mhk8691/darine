import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../BackLink";
export const metadata: Metadata = {
  title: "پس انداز خودکار | دارینه",
  description: "",
};
const items: ToggleItemsType[] = [
  {
    title: "کارت ها",
    value: "cards",
    id: 2,
    emptyMessage: "کارتی برای شما به ثبت نرسیده است",
  },
  {
    title: "واریز ها",
    value: "deposits",
    id: 1,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },
];
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="پس انداز خودکار" />
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4.8,
        }}
        order={{
          xs: 2,
          md: 1,
        }}
      >
        <Card
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            pb: 8,
          }}
        >
          <Link href={"/dashboard/bank-card"}>
            <Button
              disableRipple
              variant="contained"
              sx={{
                py: 1,
                px: 2,
                fontSize: 16,
                fontWeight: "bold",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "primary.main",
                },
              }}
            >
              افزودن کارت بانکی
            </Button>
          </Link>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <Image
              src={"/images/emptyTableDark.png"}
              width={300}
              height={270}
              alt=""
            />
            <Typography variant="body2" fontSize={12} sx={{ color: "#C2C2BA" }}>
              متاسفانه کارت‌های ثبت شده در پنل شما جزو بانک‌های پشتیبانی شده
              نیست.
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Card
          style={{
            color: "#EF8011",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mt: "10px",
              fontSize: {
                xs: 12,
                md: 16,
              },
            }}
          >
            در حال حاضر پس‌انداز خودکار فقط توسط بانک‌ کشاورزی و پارسیان و آینده
            پشتیبانی می‌شود.
          </Typography>
        </Card>
      </Grid>
      <Grid size={12} order={3}>
        <OrderDetail
          type="chip"
          title="لیست تراکنش‌‌های اخیر"
          toggleItems={items}
        />
      </Grid>
    </Grid>
  );
}

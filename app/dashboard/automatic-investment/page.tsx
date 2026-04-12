import Card from "@/app/Components/Card/Card";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid, Stack, Typography, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import Link from "next/link";

const items: ToggleItemsType[] = [
  { title: "واریز ها", value: "deposits", id: 1 },
  { title: "کارت ها", value: "cards", id: 2 },
];
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={12} container>
        <Grid size={4.8}>
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
                  '&:hover':{
                    bgcolor:'primary.main'
                  }
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
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ color: "#C2C2BA" }}
              >
                متاسفانه کارت‌های ثبت شده در پنل شما جزو بانک‌های پشتیبانی شده
                نیست.
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid size={7.2}>
          <Card
            style={{
              color: "#EF8011",
            }}
          >
            <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
              <Typography variant="body2" fontSize={16}>
                <InfoOutlinedIcon sx={{ mt: 1 }} />
              </Typography>
              <Typography variant="h6" fontSize={22} sx={{ mb: 0.3 }}>
                توجه
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mt: "10px" }}
            >
              در حال حاضر پس‌انداز خودکار فقط توسط بانک‌ کشاورزی و پارسیان و
              آینده پشتیبانی می‌شود.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          type="chip"
          emptyMessage="کارتی برای شما به ثبت نرسیده است"
          title="لیست تراکنش‌‌های اخیر"
          toggleItems={items}
        />
      </Grid>
    </Grid>
  );
}

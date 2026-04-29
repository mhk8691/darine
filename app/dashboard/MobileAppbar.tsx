"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ItemsType {
  name: string;
  image: string;
  link?: string;
}
 const AppbarItems: ItemsType[] = [
   {
     name: "خرید و فروش",
     image: "/images/appbar/trade-active-dark.svg",
     link: "/trades",
   },
   {
     name: "واریز و برداشت",
     image: "/images/appbar/irtTransaction-active-dark.svg",
     link: "/irt-transaction",
   },
   {
     name: "سفارش با قیمت",
     image: "/images/appbar/limitOrder-active-dark.svg",
     link: "/limit-order",
   },

   {
     name: "ثبت کارت هدیه",
     image: "/images/appbar/giftCard-active-dark.svg",
     link: "/gift-card-submit",
   },
   {
     name: "خرید اقساطی",
     image: "/images/appbar/credit-active-dark.svg",
     link: "/credit-menu",
   },
   {
     name: "تحویل فیزیکی",
     image: "/images/appbar/shop-active-dark.svg",
     link: "/gold-receive",
   },
 ];
export default function MobileAppbar() {
  const router = useRouter();
  return (
    <Grid spacing={2} container>
      {AppbarItems.map((item) => (
        <Grid
          size={4}
          bgcolor={"#1C1C1B"}
          border={1}
          borderColor={'background.paper'}
          borderRadius={2}
          key={item.name}
          p={1.5}
          component={"div"}
          onClick={() => {
            router.push(`/dashboard${item.link}`);
          }}
          sx={{ cursor: "pointer" }}
        >
          <Stack direction={"column"} alignItems={"center"} gap={1}>
            <Image src={item.image} alt="" width={30} height={30} />
            <Typography variant="body1" fontSize={12} fontWeight={500} sx={{whiteSpace:'nowrap'}}>
              {item.name}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

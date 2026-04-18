import { Close } from "@mui/icons-material";
import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import CustomModal from "../CustomModal/CustomModal";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
interface ItemsType {
  title: string;
  navigation: {
    name: string;
    image: string;
    link: string;
  }[];
}
const items: ItemsType[] = [
  {
    title: "سفارش",
    navigation: [
      {
        name: "خرید  و فروش",
        image: "/trade-active-dark.svg",
        link: "/trades",
      },
      {
        name: "سفارش با قیمت",
        image: "/limitOrder-active-dark.svg",
        link: "/limit-order",
      },
      {
        name: "سفارش تعهدی",
        image: "/marginOrder-active-dark.svg",
        link: "/margin-trade",
      },
    ],
  },
  {
    title: "کیف پول",
    navigation: [
      {
        name: "دارایی ها",
        image: "/wallet-active-dark.svg",
        link: "/wallet",
      },
      {
        name: "واریز و برداشت",
        image: "/irtTransaction-active-dark.svg",
        link: "/irt-transaction",
      },
      {
        name: "کارت های بانکی",
        image: "/irtTransaction-active-dark.svg",
        link: "/bank-card",
      },
    ],
  },
  {
    title: "امکانات",
    navigation: [
      {
        name: "خرید اقساطی",
        image: "/credit-active-dark.svg",
        link: "/credit-menu",
      },
      {
        name: "اعتبار خرید کالا",
        image: "/loan-active-dark.svg",
        link: "/loan",
      },
      {
        name: "تحویل فیزیکی",
        image: "/shop-active-dark.svg",
        link: "/gold-receive",
      },
      {
        name: "کارت هدیه",
        image: "/giftCard-active-dark.svg",
        link: "/gift-card-menu",
      },
      {
        name: "پس انداز خودکار",
        image: "/automatic-active-dark.svg",
        link: "/automatic-investment",
      },
      {
        name: "آلارم قیمت",
        image: "/priceAlert-active-dark.svg",
        link: "/price-alert",
      },
    ],
  },
  {
    title: "سایر",
    navigation: [
      {
        name: "گزارش ها",
        image: "/reports-active-dark.svg",
        link: "/reports",
      },
      {
        name: "دعوت از دوستان",
        image: "/invite-active-dark.svg",
        link: "/invite",
      },
      {
        name: "پروفایل",
        image: "/profile-active-dark.svg",
        link: "/profile",
      },
    ],
  },
];
export default function ModalNavigation({ open, setOpen }: Props) {
  const router = useRouter();
  return (
    <>
      <CustomModal
        open={open}
        setOpen={setOpen}
        modalStyle={{
          height: "65%",
          overflow: "auto",
          px: 5,
          pb: 2,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack></Stack>
          <Typography variant="body2" fontSize={18}>
            منو
          </Typography>
          <IconButton>
            <Close />
          </IconButton>
        </Stack>
        <Stack direction={"column"} gap={1.5}>
          {items.map((item, index) => (
            <>
              <Stack key={item.title} direction={"column"} gap={1}>
                <Typography variant="body1" fontSize={18}>
                  {item.title}
                </Typography>
                <Grid container spacing={2}>
                  {item.navigation.map((navigate) => (
                    <Grid
                      size={4}
                      bgcolor={"background.paper"}
                      borderRadius={2}
                      key={navigate.name}
                      py={1}
                      px={1.5}
                      component={"div"}
                      onClick={() => {
                        router.push(`/dashboard${navigate.link}`);
                        setOpen(false);
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <Stack direction={"column"} alignItems={"center"} gap={1}>
                        <Image
                          src={`/images/appbar${navigate.image}`}
                          alt=""
                          width={30}
                          height={30}
                        />
                        <Typography
                          variant="body1"
                          fontSize={14}
                          fontWeight={500}
                        >
                          {navigate.name}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              {index !== items.length - 1 && <Divider />}
            </>
          ))}
        </Stack>
      </CustomModal>
    </>
  );
}

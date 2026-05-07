import { Metadata } from "next";
import BackLink from "../BackLink";
import InfoContainer from "@/app/Components/Containers/InfoContainer/InfoContainer";
import { ActionButtonType } from "@/app/core/Types";
export const metadata: Metadata = {
  title: "منو کارت هدیه | دارینه",
  description: "",
};
const items: ActionButtonType[] = [
  {
    title: "سفارش کارت هدیه",
    link: "/dashboard/gift-card",
    icon: "/images/simple/buyGiftCard.svg",
  },
  {
    title: "ثبت کارت هدیه",
    link: "/dashboard/gift-card-submit",
    icon: "/images/simple/giftCardSubmit.svg",
  },
  {
    title: "لیست کارت هدیه",
    link: "/dashboard/gift-cards",
    icon: "/images/simple/giftCardList.svg",
  },
];

export default function page() {
  return (
    <>
      <BackLink title="کارت هدیه" />
      <InfoContainer
        title="کارت هدیه"
        items={items}
        image="/images/giftCardMenuDark.webp"
        style={{ height: "237px" }}
      />
    </>
  );
}

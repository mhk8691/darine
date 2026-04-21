import React from "react";
import TableContainer from "../Components/Tables/TableContainer";
import { FaqItem, TableGoldDataType } from "../core/Types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "قیمت سکه پارسیان امروز  | دارینه",
  description: "",
};
const data: { title: string; order: number; data: TableGoldDataType[] }[] = [
  {
    title: "سکه پارسیان",
    order: 1,
    data: [
      {
        typeGold: "سکه پارسیان 100 سوتی",
        currentRate: 2134200,
        minPriceDay: 2122440,
        maxPriceDay: 2160000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 200 سوتی",
        currentRate: 4268400,
        minPriceDay: 4244880,
        maxPriceDay: 4320000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 300 سوتی",
        currentRate: 6402600,
        minPriceDay: 6367320,
        maxPriceDay: 6480000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 400 سوتی",
        currentRate: 8536800,
        minPriceDay: 8489760,
        maxPriceDay: 8640000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 500 سوتی",
        currentRate: 10671000,
        minPriceDay: 10612200,
        maxPriceDay: 10800000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 600 سوتی",
        currentRate: 12805200,
        minPriceDay: 12734640,
        maxPriceDay: 12960000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 700 سوتی",
        currentRate: 14939400,
        minPriceDay: 14857080,
        maxPriceDay: 15120000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 800 سوتی",
        currentRate: 17073600,
        minPriceDay: 16979520,
        maxPriceDay: 17280000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 900 سوتی",
        currentRate: 19207800,
        minPriceDay: 19101960,
        maxPriceDay: 19440000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1 گرمی",
        currentRate: 21342000,
        minPriceDay: 21224400,
        maxPriceDay: 21600000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1.100 گرمی",
        currentRate: 23476200,
        minPriceDay: 23346840,
        maxPriceDay: 23760000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1.200 گرمی",
        currentRate: 25610400,
        minPriceDay: 25469280,
        maxPriceDay: 25920000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1.300 گرمی",
        currentRate: 27744600,
        minPriceDay: 27591720,
        maxPriceDay: 28080000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1.400 گرمی",
        currentRate: 29878800,
        minPriceDay: 29714160,
        maxPriceDay: 30240000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان 1.500 گرمی",
        currentRate: 32013000,
        minPriceDay: 31836600,
        maxPriceDay: 32400000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
    ],
  },
  {
    title: "سکه",
    order: 2,
    data: [
      {
        typeGold: "سکه امامی",
        currentRate: 186510000,
        minPriceDay: 186480000,
        maxPriceDay: 186510000,
        dayChange: "0%",
        monthChange: "-7.9%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه تمام بهار آزادی",
        currentRate: 179020000,
        minPriceDay: 178980000,
        maxPriceDay: 179020000,
        dayChange: "0.016%",
        monthChange: "-9.315%",
        weeklyChart: 2,
      },
      {
        typeGold: "نیم سکه",
        currentRate: 103900000,
        minPriceDay: 98900000,
        maxPriceDay: 103900000,
        dayChange: "5.055%",
        monthChange: "-0.45%",
        weeklyChart: 2,
      },
      {
        typeGold: "ربع سکه",
        currentRate: 59800000,
        minPriceDay: 56300000,
        maxPriceDay: 59800000,
        dayChange: "6.216%",
        monthChange: "3.981%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه گرمی",
        currentRate: 29200000,
        minPriceDay: 27200000,
        maxPriceDay: 29200000,
        dayChange: "7.352%",
        monthChange: "0%",
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان ۱ گرمی",
        currentRate: 21295200,
        minPriceDay: 21224400,
        maxPriceDay: 21525600,
        dayChange: "-0.987%",
        monthChange: "3.783%",
        weeklyChart: 2,
      },
    ],
  },
];
const faqData: FaqItem[] = [
  {
    id: "1",
    question: "چرا اطلاع لحظه‌ای از قیمت سکه پارسیان اهمیت دارد؟",
    answer:
      "چون بازار طلا و سکه دائماً در حال نوسان است. با داشتن اطلاعات لحظه‌ای، می‌توانید بهترین زمان برای خرید یا فروش را انتخاب کرده و از زیان‌های احتمالی جلوگیری کنید.",
  },
  {
    id: "2",
    question: "آیا سکه پارسیان برای سرمایه‌گذاری مناسب است؟",
    answer:
      "خیر. به دلیل وجود مالیات و کمیسیون حدود ۷ درصد، سکه پارسیان گزینه مناسبی برای سرمایه‌گذاری نیست و بیشتر جنبه هدیه و خریدهای کوچک دارد.",
  },
  {
    id: "3",
    question: "مالیات و کارمزد سکه پارسیان چقدر است؟",
    answer:
      "هنگام خرید سکه پارسیان حدود ۷ درصد کمیسیون و مالیات به قیمت اصلی اضافه می‌شود. همین موضوع باعث می‌شود هزینه نهایی خرید بیشتر از نرخ اعلامی باشد.",
  },
  {
    id: "4",
    question: "انواع سکه پارسیان موجود در بازار کدامند؟",
    answer:
      "سکه‌های پارسیان در وزن‌های مختلف از ۵۰ سوت تا ۲ گرم عرضه می‌شوند. متداول‌ترین آن‌ها شامل ۵۰ سوتی، ۱۰۰ سوتی، ۲۵۰ سوتی، ۵۰۰ سوتی، ۱ گرمی و ۲ گرمی هستند.",
  },
  {
    id: "5",
    question: "تفاوت سکه پارسیان با طلا یا سکه بانکی چیست؟",
    answer:
      "سکه‌های پارسیان بیشتر برای هدیه و خریدهای کوچک استفاده می‌شوند و ارزش سرمایه‌گذاری بالایی ندارند. اما سکه‌های بانکی و طلا آب‌شده هزینه‌های جانبی کمتری دارد و گزینه مناسب‌تری برای سرمایه‌گذاری هستند.",
  },
  {
    id: "6",
    question: "آیا قیمت سکه پارسیان همیشه با قیمت طلا تغییر می‌کند؟",
    answer:
      "بله. قیمت سکه پارسیان بر اساس نرخ روز طلا تغییر می‌کند، اما به دلیل کمیسیون و مالیات، قیمت نهایی آن اغلب بالاتر از ارزش واقعی طلا‌ست.",
  },
  {
    id: "7",
    question: "از کجا می‌توانم سکه پارسیان را با بهترین قیمت بخرم؟",
    answer:
      "با مراجعه به پلتفرم‌های معتبر مانند طلاسی، می‌توانید قیمت لحظه‌ای سکه پارسیان را ببینید و خرید خود را به‌صورت آنلاین و مطمئن انجام دهید.",
  },
];
export default function page() {
  return <TableContainer title="سکه پارسیان" data={data} faqData={faqData} />;
}

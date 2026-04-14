import React from "react";
import TableContainer from "../Components/Tables/TableContainer";
import { FaqItem, TableGoldDataType } from "../core/Types";
const data: { title: string; order: number; data: TableGoldDataType[] }[] = [
  {
    title: "سکه",
    order: 1,
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
  {
    title: "طلا",
    order: 2,
    data: [
      {
        typeGold: "طلای ۱۸ عیار(گرم)",
        currentRate: 17785000,
        minPriceDay: 17687000,
        maxPriceDay: 18000000,
        dayChange: "-0.875%",
        monthChange: "3.587%",
        weeklyChart: 2,
      },
      {
        typeGold: "طلای ۲۱ عیار(گرم)",
        currentRate: 20703666,
        minPriceDay: 20634833,
        maxPriceDay: 20927666,
        dayChange: "-0.987%",
        monthChange: " 3.783%",
        weeklyChart: 2,
      },
      {
        typeGold: " طلای ۲۴ عیار(گرم)",
        currentRate: 23543026,
        minPriceDay: 23464753,
        maxPriceDay: 23797746,
        dayChange: "-0.987%,",
        monthChange: " 3.783%",
        weeklyChart: 2,
      },
      {
        typeGold: "۱ مثقال طلا ",
        currentRate: 76872122,
        minPriceDay: 76616546,
        maxPriceDay: 77703828,
        dayChange: "-0.987%",
        monthChange: " 3.783%",
        weeklyChart: 2,
      },
      {
        typeGold: "انس جهانی طلا ",
        currentRate: 4785,
        minPriceDay: 4714,
        maxPriceDay: 4787,
        dayChange: " 1.506%",
        monthChange: "-9.342%",
        weeklyChart: 2,
      },
      {
        typeGold: "آبشده نقدی",
        currentRate: 76872122,
        minPriceDay: 76616546,
        maxPriceDay: 77703828,
        dayChange: "-0.987%",
        monthChange: " 3.783%",
        weeklyChart: 2,
      },
      {
        typeGold: " طلای دست دوم",
        currentRate: 17509445,
        minPriceDay: 17451232,
        maxPriceDay: 17698886,
        dayChange: "-0.987%",
        monthChange: " 3.783%",
        weeklyChart: 2,
      },
    ],
  },
];
const faqData: FaqItem[] = [
  {
    id: "1",
    question: "سکه طلا چیست و چه انواعی دارد؟",
    answer:
      "سکه طلا یکی از مسکوکات رسمی بانک مرکزی است که در چهار نوع تمام سکه، نیم‌سکه، ربع‌سکه و سکه یک گرمی ضرب می‌شود. این سکه‌ها با عیار ۹۰۰ و وزن مشخص عرضه می‌شوند و در بازار ایران نقش مهمی در سرمایه‌گذاری دارند.",
  },
  {
    id: "2",
    question: "قیمت روز سکه چگونه محاسبه می‌شود؟",
    answer:
      "قیمت سکه بر اساس فرمولی شامل قیمت جهانی اونس طلا، نرخ دلار آزاد، وزن و عیار سکه و هزینه ضرب محاسبه می‌شود. تغییر در هر یک از این عوامل به‌طور مستقیم روی قیمت نهایی سکه تاثیر می‌گذارد.",
  },
  {
    id: "3",
    question: "چه عواملی باعث نوسان قیمت سکه در ایران می‌شود؟",
    answer:
      "مهم‌ترین عوامل عبارت‌اند از: نرخ جهانی طلا، قیمت دلار آزاد، شرایط سیاسی و اقتصادی کشور و میزان عرضه و تقاضا در بازار داخلی.",
  },
  {
    id: "4",
    question: "آیا خرید سکه طلا برای سرمایه‌گذاری مناسب است؟",
    answer:
      "بله. سکه طلا به دلیل نقدشوندگی بالا و ارتباط مستقیم با نرخ جهانی طلا و ارز، یکی از گزینه‌های محبوب و مطمئن برای سرمایه‌گذاری در ایران محسوب می‌شود.",
  },
  {
    id: "5",
    question: "بهترین روش برای استعلام آنلاین قیمت سکه چیست؟",
    answer:
      "بهترین روش، استفاده از وب‌سایت‌ها و پلتفرم‌های معتبر مانند طلاسی است که قیمت‌ها را به صورت لحظه‌ای و دقیق به‌روزرسانی می‌کنند و امکان تحلیل بازار را نیز فراهم می‌سازند.",
  },
];
export default function page() {
  return <TableContainer title="سکه" data={data} faqData={faqData} />;
}

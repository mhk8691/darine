import React from "react";
import TableContainer from "../Components/Tables/TableContainer";
import { FaqItem, TableGoldDataType } from "../core/Types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "قیمت طلا امروز آنلاین و لحظه ای | دارینه",
  description: "",
};
const data: { title: string; order: number; data: TableGoldDataType[] }[] = [
  {
    title: "طلا",
    order: 1,
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
    question: "مظنه طلا یعنی چه؟",
    answer:
      "به قیمت ۴.۶۰۸ گرم طلای ۱۷ عیار مظنه طلا می‌گویند. در ایران از این واحد برای محاسبه قیمت‌های طلا استفاده می‌شود.",
  },
  {
    id: "2",
    question: "عیار طلا چیست؟",
    answer:
      "عیار طلا میزان طلای خالص موجود در یک قطعه طلا را نشان می‌دهد. بالاترین عیار، طلای ۲۴ عیار است که بیش از ۹۹ درصد آن را طلا تشکیل می‌دهد.",
  },
  {
    id: "3",
    question: "رایج‌ترین عیار طلا در ایران کدام است؟",
    answer:
      "طلای خالص معمولا نرمی زیادی دارد و برای ساخت زیورآلات مناسب نیست. برای همین به آن فلزات دیگری اضافه می‌کنند تا عیار آن پایین‌تر بیاید. در ایران رایج‌ترین عیار در بازار طلای ۱۸ عیار است.",
  },
  {
    id: "4",
    question: "تفاوت طلای ۱۸ و ۲۴ عیار در چیست؟",
    answer:
      "طلای ۱۸ عیار از ۷۵ درصد طلای خالص تشکیل شده است اما طلای ۲۴ عیار بیش از ۹۹ درصد طلای خالص دارد.",
  },
  {
    id: "5",
    question: "انس جهانی طلا چیست؟",
    answer:
      "در بازارهای جهانی از واحد انس برای نمایش قیمت طلا استفاده می‌شود که به آن انس جهانی طلا می‌گویند. هر انس برابر ۳۱.۱۰ گرم طلای ۲۴ عیار است.",
  },
  {
    id: "6",
    question: "قیمت طلا چگونه تعیین می‌شود؟",
    answer:
      "قیمت طلا به‌صورت لحظه‌ای و براساس عوامل مختلفی همچون نرخ ارز، نرخ بهره، نرخ تورم، قیمت جهانی اونس طلا و... محاسبه می‌شود.",
  },
  {
    id: "7",
    question: "از کجا طلا بخریم؟",
    answer:
      "یکی از آسان‌ترین روش‌های خرید طلا در ایران خرید طلای آب شده آنلاین از طلاسی است. این روش بدون اجرت و مالیات است و می‌توانید خرید خود را در ۲۴ ساعت شبانه‌روز و ۷ روز هفته انجام دهید.",
  },
];
export default function page() {
  return <TableContainer title="طلا" data={data} faqData={faqData} />;
}

'use client';

import { useEffect, useState } from 'react';
import TableContainer from '../Components/Tables/ProductTable/GoldContainer';
import { FaqItem, PricesDataType } from '../core/Types';
import { getGoldsPrices } from '@/lib/prices/goldsPrice';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Components/Snackbar/Snackbar';

const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'مظنه طلا یعنی چه؟',
    answer:
      'به قیمت ۴.۶۰۸ گرم طلای ۱۷ عیار مظنه طلا می‌گویند. در ایران از این واحد برای محاسبه قیمت‌های طلا استفاده می‌شود.',
  },
  {
    id: '2',
    question: 'عیار طلا چیست؟',
    answer:
      'عیار طلا میزان طلای خالص موجود در یک قطعه طلا را نشان می‌دهد. بالاترین عیار، طلای ۲۴ عیار است که بیش از ۹۹ درصد آن را طلا تشکیل می‌دهد.',
  },
  {
    id: '3',
    question: 'رایج‌ترین عیار طلا در ایران کدام است؟',
    answer:
      'طلای خالص معمولا نرمی زیادی دارد و برای ساخت زیورآلات مناسب نیست. برای همین به آن فلزات دیگری اضافه می‌کنند تا عیار آن پایین‌تر بیاید. در ایران رایج‌ترین عیار در بازار طلای ۱۸ عیار است.',
  },
  {
    id: '4',
    question: 'تفاوت طلای ۱۸ و ۲۴ عیار در چیست؟',
    answer:
      'طلای ۱۸ عیار از ۷۵ درصد طلای خالص تشکیل شده است اما طلای ۲۴ عیار بیش از ۹۹ درصد طلای خالص دارد.',
  },
  {
    id: '5',
    question: 'انس جهانی طلا چیست؟',
    answer:
      'در بازارهای جهانی از واحد انس برای نمایش قیمت طلا استفاده می‌شود که به آن انس جهانی طلا می‌گویند. هر انس برابر ۳۱.۱۰ گرم طلای ۲۴ عیار است.',
  },
  {
    id: '6',
    question: 'قیمت طلا چگونه تعیین می‌شود؟',
    answer:
      'قیمت طلا به‌صورت لحظه‌ای و براساس عوامل مختلفی همچون نرخ ارز، نرخ بهره، نرخ تورم، قیمت جهانی اونس طلا و... محاسبه می‌شود.',
  },
  {
    id: '7',
    question: 'از کجا طلا بخریم؟',
    answer:
      'یکی از آسان‌ترین روش‌های خرید طلا در ایران خرید طلای آب شده آنلاین از دارینه است. این روش بدون اجرت و مالیات است و می‌توانید خرید خود را در ۲۴ ساعت شبانه‌روز و ۷ روز هفته انجام دهید.',
  },
];

export default function Page() {
  const [goldData, setGoldData] = useState<
    {
      title: string;
      order: number;
      data: PricesDataType[];
    }[]
  >([
    {
      title: 'طلا',
      order: 1,
      data: [],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGoldsPrices();

        setGoldData([
          {
            title: 'طلا',
            order: 1,
            data: response,
          },
        ]);
      } catch (error:unknown) {
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message)
          }
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer
      title="طلا"
      data={goldData}
      faqData={faqData}
    />
  );
}
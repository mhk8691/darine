'use client';

import { useEffect, useState } from 'react';
import TableContainer from '../Components/Tables/ProductTable/GoldContainer';
import { FaqItem, PricesDataType } from '../core/Types';
import { getCoinsPrices } from '@/lib/prices/coinsPrices';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Components/Snackbar/Snackbar';

const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'چرا اطلاع لحظه‌ای از قیمت سکه پارسیان اهمیت دارد؟',
    answer:
      'چون بازار طلا و سکه دائماً در حال نوسان است. با داشتن اطلاعات لحظه‌ای، می‌توانید بهترین زمان برای خرید یا فروش را انتخاب کنید.',
  },
  {
    id: '2',
    question: 'آیا سکه پارسیان برای سرمایه‌گذاری مناسب است؟',
    answer:
      'خیر. به دلیل وجود مالیات و کمیسیون حدود ۷ درصد، گزینه مناسبی برای سرمایه‌گذاری نیست.',
  },
];

export default function Page() {
  const [data, setData] = useState<
    { title: string; order: number; data: PricesDataType[] }[]
  >([
    {
      title: 'سکه',
      order: 1,
      data: [],
    },
    // {
    //   title: 'سکه پارسیان',
    //   order: 2,
    //   data: [],
    // },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCoinsPrices();

        setData([
          {
            title: 'سکه',
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

    getData();
  }, []);

  return (
    <TableContainer
      title="سکه"
      data={data}
      faqData={faqData}
    />
  );
}
'use client'
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail'
import { GiftCardListType } from '@/app/core/Types'
import { getGiftCardList } from '@/lib/reports/getReports'
import React, { useEffect, useState } from 'react'
import GiftCardTable from '../gift-cards/GiftCardTable'

export default function GiftCardOrder() {
      const [giftCardsList, setGiftCardsList] = useState<GiftCardListType[]>([] as GiftCardListType[]);
  useEffect(() => {
    const getData = async () => {
      const response = await getGiftCardList();
      setGiftCardsList(response || []);
    };
    getData();
  }, []);
  return (
     <OrderDetail
          listLength={giftCardsList.length}
          title="کارت هدیه های شما"
          toggleItems={[]}
          type="chip"
          emptyMessage="کارت هدیه‌ای برای شما به ثبت نرسیده است"
          tableHead={['شماره سریال', 'وزن', 'وضعیت', 'تاریخ']}
          tableBody={
         <GiftCardTable giftCardsList={giftCardsList || []} />
          }
        />
  )
}

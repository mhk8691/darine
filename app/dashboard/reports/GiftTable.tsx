import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail'
import { ToggleItemsType } from '@/app/core/Types';
import React from 'react'

const giftItems: ToggleItemsType[] = [
  {
    title: 'خریداری شده',
    value: 'buy',
    id: 1,
    emptyMessage: 'کارت هدیه‌ای توسط شما خریداری نشده است.',
  },
  {
    title: 'دریافت شده',
    value: 'receive',
    id: 2,
    emptyMessage: 'کارت هدیه‌ای برای شما به ثبت نرسیده است',
  },
];

export default function GiftTable() {
  return (
     <OrderDetail key={3} noCard toggleItems={giftItems} type="toggle" tableBody={<></>} tableHead={[]} listLength={0} />
  )
}

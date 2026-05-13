import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail'
import { ToggleItemsType } from '@/app/core/Types';
import React from 'react'

const withdrawItems: ToggleItemsType[] = [
  {
    title: 'برداشت به حساب بانکی',
    value: 'bankAccount',
    id: 1,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },
  {
    title: 'برداشت به نقره سی',
    value: 'silver',
    id: 2,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },
];

export default function WithdrawTable() {
  return (
     <OrderDetail key={3} noCard toggleItems={withdrawItems} type="toggle" tableBody={<></>} tableHead={[]} listLength={0} />
  )
}

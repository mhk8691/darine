import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { ToggleItemsType } from '@/app/core/Types';
import React from 'react';

const receiveItems: ToggleItemsType[] = [
  {
    title: 'حضوری',
    value: 'buy',
    id: 1,
    emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
  },
  {
    title: 'درب منزل',
    value: 'recive',
    id: 2,
    emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
  },
];

export default function ReceiveTable() {
  return (
    <OrderDetail
      key={1}
      noCard
      toggleItems={receiveItems}
      type="toggle"
      tableBody={<></>}
      tableHead={[]}
      listLength={0}
    />
  );
}

import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { ToggleItemsType } from '@/app/core/Types';
import React from 'react';

const depositItems: ToggleItemsType[] = [
  {
    title: 'درگاه پرداخت',
    value: 'paymentGateway',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز مستقیم',
    value: 'directDeposit',
    id: 2,
    emptyMessage: 'واریز باشناسه ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز از نقره سی',
    value: 'silverDeposit',
    id: 3,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
];

export default function DepositTable() {
  return (
    <OrderDetail
      key={2}
      noCard
      toggleItems={depositItems}
      type="toggle"
      tableBody={<></>}
      tableHead={[]}
      listLength={0}
    />
  );
}

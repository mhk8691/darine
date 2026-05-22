import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import React from 'react';
import TransactionTable from '../irt-transaction/TransactionTable';

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

export default function WithdrawTable({data}:{data:RecentTransactionDataType[]}) {
  return (
    <OrderDetail
      key={3}
      toggleItems={withdrawItems}
      noCard
      type="toggle"
      tableBody={<TransactionTable data={data} />}
      tableHead={[
        'قیمت',
        'نوع تراکنش',
        'روش',
        'وضعیت',
        'کد پیگیری',
        'تاریخ',
      ]}
      listLength={data.length}
    />
  );
}

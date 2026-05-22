import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import React from 'react';
import TransactionTable from '../irt-transaction/TransactionTable';

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

export default function DepositTable({data}:{data:RecentTransactionDataType[]}) {
  return (
    <OrderDetail
      key={2}
      noCard
      toggleItems={depositItems}
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

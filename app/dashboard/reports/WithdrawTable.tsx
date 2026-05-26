import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import React, { Dispatch, SetStateAction } from 'react';
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

export default function WithdrawTable({data,setWithdrawParams}:{data:RecentTransactionDataType[],setWithdrawParams:Dispatch<SetStateAction<string>>}) {
  return (
    <OrderDetail
      key={3}
      setParams={setWithdrawParams}
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

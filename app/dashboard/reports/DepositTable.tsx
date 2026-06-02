import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import React, { Dispatch, SetStateAction } from 'react';
import TransactionTable from '../irt-transaction/TransactionTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

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
interface Props{
  data:RecentTransactionDataType[],
  setDepositParams:Dispatch<SetStateAction<string>>
   setFilter: Dispatch<SetStateAction<string>>
      setDateRange:Dispatch<SetStateAction<DatePickerValue|null>>
      filter:string
      dateRange:DatePickerValue|null
}
export default function DepositTable({data,setDepositParams,setDateRange,setFilter,filter,dateRange}:Props) {
  return (
    <OrderDetail
     status={filter}
    setDateRange={setDateRange}
    setStatus={setFilter}
    dateRange={dateRange}
    setParams={setDepositParams}
      key={2}
      toggleItems={depositItems}
      type="toggle"
      noCard
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

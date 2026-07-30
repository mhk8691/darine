import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import React, { Dispatch, SetStateAction, useState } from 'react';
import TransactionTable from '../irt-transaction/TransactionTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import TransactionDetail from './TransactionDetail';
export const statuses = [
  { label: 'در انتظار تایید', value: 'PENDING' },
  { label: 'تکمیل شده', value: 'COMPLETED' },
  { label: 'لغو شده', value: 'CANCELLED' },
  { label: 'ناموفق', value: 'FAILED' },
];
const depositItems: ToggleItemsType[] = [
  {
    title: 'درگاه پرداخت',
    value: 'ONLINE',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز مستقیم',
    value: 'BANK',
    id: 2,
    emptyMessage: 'واریز باشناسه ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز از نقرینه',
    value: 'SILVER',
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
  const [modalOpen, setModalOpen] = useState(false);
      const [selectedTransaction, setSelectedTransaction] =
        useState<RecentTransactionDataType | null>(null);
  function handleRowClick(row: RecentTransactionDataType) {
        setSelectedTransaction(row);
        setModalOpen(true);
      }
  return (
    <>
    <OrderDetail
    statuses={statuses}
     status={filter}
    setDateRange={setDateRange}
    setStatus={setFilter}
    dateRange={dateRange}
    setParams={setDepositParams}
      key={2}
      toggleItems={depositItems}
      type="toggle"
      noCard
       tableBody={<TransactionTable data={data} onRowClick={handleRowClick}  />}
      tableHead={[
        'قیمت',
        'نوع تراکنش',
        'روش',
        'وضعیت',
        'کد پیگیری',
        'تاریخ',
        ''
      ]}
      listLength={data.length}
    />
    <TransactionDetail
              open={modalOpen}
              setOpen={setModalOpen}
              data={selectedTransaction}
            />
    </>
  );
}

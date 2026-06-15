  import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
  import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
  import React, { Dispatch, SetStateAction, useState } from 'react';
  import TransactionTable from '../irt-transaction/TransactionTable';
  import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
  import { statuses } from './DepositTable';
import TransactionDetailModal from './TransactionDetailModal';

  const withdrawItems: ToggleItemsType[] = [
    {
      title: 'برداشت به حساب بانکی',
      value: 'BANK',
      id: 1,
      emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
    },
    {
      title: 'برداشت به نقره سی',
      value: 'SILVER',
      id: 2,
      emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
    },
  ];

  interface Props {
    data: RecentTransactionDataType[];
    setWithdrawParams: Dispatch<SetStateAction<string>>;
    setFilter: Dispatch<SetStateAction<string>>;
    setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>;
    filter: string;
    dateRange: DatePickerValue | null;
  }

  export default function WithdrawTable({
    data,
    setWithdrawParams,
    setDateRange,
    setFilter,
    filter,
    dateRange,
  }: Props) {
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
          key={3}
          setParams={setWithdrawParams}
          toggleItems={withdrawItems}
          noCard
          type="toggle"
          tableBody={
            <TransactionTable
              data={data}
              onRowClick={handleRowClick}  
            />
          }
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

        <TransactionDetailModal
          open={modalOpen}
          setOpen={setModalOpen}
          data={selectedTransaction}
        />
      </>
    );
  }

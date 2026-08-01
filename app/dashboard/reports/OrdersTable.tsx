import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType, ToggleItemsType } from '@/app/core/Types';
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { statuses } from './DepositTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import OrderDetailModal, { orderStatusMap } from './OrderDetail';

const receiveItems: ToggleItemsType[] = [
  {
    title: 'حضوری',
    value: 'buy',
    id: 1,
    emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
  },

];

interface Props {
  setOrdersParams: Dispatch<SetStateAction<string>>;
  data: OrdersDataType[];
  noCard?: boolean;
  setFilter: Dispatch<SetStateAction<string>>;
  setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>;
  filter: string;
  dateRange: DatePickerValue | null;
  type?: 'chip' | 'toggle';
}

interface OrderRowProps {
  row: OrdersDataType;
  onOpenDetail: (row: OrdersDataType) => void;
}

function OrderRow({ row, onOpenDetail }: OrderRowProps) {
  const [open, setOpen] = useState(false);

  // استخراج مشخصات وضعیت مستقیماً از Map
  const statusInfo = orderStatusMap[row.status];
  const statusTitle = statusInfo?.title ?? row.status;
  const statusColor = statusInfo?.color ?? 'default';

  return (
    <>
      <TableRow
        sx={{
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'action.hover' },
        }}
      >
        {/* tracking */}
        <TableCell align="center">{row.tracking_code}</TableCell>
        
        {/* status */}
        <TableCell align="center" sx={{ color: `${statusColor}.main` }}>
          {statusTitle}
        </TableCell>

        {/* amount */}
        <TableCell align="center">
          {priceFormater(row.total_toman_amount)} تومان
        </TableCell>
        <TableCell align="center">
          {priceFormater(row.total_gold_amount)} گرم
        </TableCell>

        {/* date */}
        <TableCell align="center">{formatDate(row.created_at)}</TableCell>

        {/* delivery type */}
        <TableCell align="center">{row.payment_method_display}</TableCell>

        {/* detail modal */}
        <TableCell align="right">
          <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(row);
            }}
          >
            مشاهده جزئیات
          </Button>
        </TableCell>

        <TableCell align="left">
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((p) => !p);
            }}
          >
            مشاهده محصولات
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={8} sx={{ p: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ m: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ py: 2 }}>نام</TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>تعداد</TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>قیمت</TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>وزن</TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>جمع</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items?.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell align="center" sx={{ py: 2 }}>{item.product_name}</TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>{item.quantity}</TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>
                        {priceFormater(item.price_at_time)} تومان
                      </TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>{item.weight_at_time} گرم</TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>
                        {priceFormater(item.price_at_time * item.quantity)} تومان
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function OrdersTable({
  data,
  dateRange,
  filter,
  setDateRange,
  setFilter,
  setOrdersParams,
  noCard = true,
  type = 'toggle',
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrdersDataType | null>(null);

  const handleOpenDetail = (row: OrdersDataType) => {
    setSelectedOrder(row);
    setModalOpen(true);
  };

  return (
    <>
      <OrderDetail
        setParams={setOrdersParams}
        dateRange={dateRange}
        setDateRange={setDateRange}
        setStatus={setFilter}
        status={filter}
        statuses={statuses}
        toggleItems={receiveItems}
        type={type}
        noCard={noCard}
        tableBody={
          <TableBody>
            {data?.map((row) => (
              <OrderRow key={row.id} row={row} onOpenDetail={handleOpenDetail} />
            ))}
          </TableBody>
        }
        tableHead={[
          'کد رهگیری',
          'وضعیت',
          'مبلغ',
          'وزن',
          'تاریخ',
          'نوع پرداخت',
          '',
          '',
        ]}
        listLength={data?.length || 0}
      />

      <OrderDetailModal open={modalOpen} setOpen={setModalOpen} data={selectedOrder} />
    </>
  );
}
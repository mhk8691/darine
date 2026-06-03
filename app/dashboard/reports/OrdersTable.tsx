import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType, ToggleItemsType } from '@/app/core/Types';
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { statuses } from './DepositTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';

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

interface Props {
  setOrdersParams: Dispatch<SetStateAction<string>>;
  data: OrdersDataType[];
  noCard?:boolean
  setFilter: Dispatch<SetStateAction<string>>;
  setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>;
  filter: string;
  dateRange: DatePickerValue | null;
  type?:'chip'| 'toggle'
}

export default function OrdersTable({
  data,
  dateRange,
  filter,
  setDateRange,
  setFilter,
  setOrdersParams,
  noCard=true,
type='toggle'
}: Props) {
  return (
    <OrderDetail
      setParams={setOrdersParams}
      dateRange={dateRange}
      setDateRange={setDateRange}
      setStatus={setFilter}
      status={filter}
      statuses={statuses}
      key={1}
      toggleItems={receiveItems}
      type={type}
      noCard={noCard}
      tableBody={
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td': {
                  border: 0,
                },
                '&:last-child th': {
                  border: 0,
                },
              }}
            >
              {/* کد رهگیری */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {row.tracking_code}
                  </Typography>
                </Stack>
              </TableCell>

              {/* وضعیت سفارش */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: handleColorStatus(row.status),
                    }}
                  >
                    {handleTitleStatus(row.status)}
                  </Typography>
                </Stack>
              </TableCell>

              {/* مبلغ */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {priceFormater(row.total_toman_amount)} تومان
                  </Typography>
                </Stack>
              </TableCell>

              {/* روش پرداخت */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {row.payment_method_display}
                  </Typography>
                </Stack>
              </TableCell>

              {/* نوع ارسال */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {row.delivery_type_display}
                  </Typography>
                </Stack>
              </TableCell>

              {/* آدرس */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography
                    variant="body1"
                    noWrap
                    sx={{
                      maxWidth: 250,
                      direction:'rtl'
                    }}
                  >
                    {`${row.province} - ${row.city} - ${row.address} - ${row.plaque} - ${row.unit}`}
                  </Typography>
                </Stack>
              </TableCell>

              {/* تاریخ */}
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={0.5}
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {formatDate(row.created_at)}
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      }
      tableHead={[
        'کد رهگیری',
        'وضعیت',
        'مبلغ',
        'روش پرداخت',
        'نوع ارسال',
        'آدرس',
        'تاریخ',
      ]}
      listLength={data.length}
    />
  );
}
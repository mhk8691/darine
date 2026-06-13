import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType, ToggleItemsType } from '@/app/core/Types';
import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { statuses } from './DepositTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
  noCard?: boolean;
  setFilter: Dispatch<SetStateAction<string>>;
  setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>;
  filter: string;
  dateRange: DatePickerValue | null;
  type?: 'chip' | 'toggle';
}

interface OrderRowProps {
  row: OrdersDataType;
}

function OrderRow({ row }: OrderRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{
          '&:last-child td': { border: 0 },
          '&:last-child th': { border: 0 },
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'action.hover' },
        }}
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* آیکون باز/بسته کردن */}
        

        {/* کد رهگیری */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1">{row.tracking_code}</Typography>
          </Stack>
        </TableCell>

        {/* وضعیت سفارش */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1" sx={{ color: handleColorStatus(row.status) }}>
              {handleTitleStatus(row.status)}
            </Typography>
          </Stack>
        </TableCell>

        {/* مبلغ */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1">
              {priceFormater(row.total_toman_amount)} تومان
            </Typography>
          </Stack>
        </TableCell>

        {/* روش پرداخت */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1">{row.payment_method_display}</Typography>
          </Stack>
        </TableCell>

        {/* نوع ارسال */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1">{row.delivery_type_display}</Typography>
          </Stack>
        </TableCell>

        {/* آدرس */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography
              variant="body1"
              noWrap
              sx={{ maxWidth: 250, direction: 'rtl' }}
            >
              {`${row.province} - ${row.city} - ${row.address} - ${row.plaque} - ${row.unit}`}
            </Typography>
          </Stack>
        </TableCell>

        {/* تاریخ */}
        <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
            <Typography variant="body1">{formatDate(row.created_at)}</Typography>
          </Stack>
        </TableCell>
        <TableCell align="center" sx={{ py: 2.5, px: 1, width: 48 }}>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      

      <TableRow>
        <TableCell colSpan={8} sx={{ py: 0, px: 0, border: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                mx: 3,
                my: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                overflow: 'hidden',
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'action.hover' }}>
                    <TableCell align="center">
                      <Typography variant="caption" fontWeight={600}>
                        نام محصول
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption" fontWeight={600}>
                        تعداد
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption" fontWeight={600}>
                        قیمت واحد
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption" fontWeight={600}>
                        وزن
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption" fontWeight={600}>
                        جمع
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items?.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell align="center" sx={{py:1.5}}>
                        <Typography variant="caption">{item.product_name}</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{py:1.5}}>
                        <Typography variant="caption">{item.quantity}</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{py:1.5}}>
                        <Typography variant="caption">
                          {priceFormater(item.price_at_time)} تومان
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{py:1.5}}>
                        <Typography variant="caption">
                          {item.weight_at_time} گرم
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{py:1.5}}>
                        <Typography variant="caption">
                          {priceFormater(item.price_at_time * item.quantity)} تومان
                        </Typography>
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
            <OrderRow key={row.id} row={row} />
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
        '',
      ]}
      listLength={data.length}
    />
  );
}

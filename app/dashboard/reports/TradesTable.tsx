import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';
import priceFormater from '@/app/core/PriceFormater';
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types';
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { statuses } from './DepositTable';
import TradeDetailModal from './TradeDetailModal';

const trades: ToggleItemsType[] = [
  {
    title: 'خرید',
    value: 'BUY',
    id: 1,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'فروش',
    value: 'SELL',
    id: 2,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
];
interface Props {
  setTradeParams: Dispatch<SetStateAction<string>>,
  data: TradeTableDataType[],
  type?: 'chip' | 'toggle',
  noCard?: boolean
  setFilter: Dispatch<SetStateAction<string>>
  setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>
  filter: string
  dateRange: DatePickerValue | null
}

export default function TradesTable({
  setTradeParams,
  data,
  type = 'toggle',
  noCard = true,
  dateRange,
  setDateRange,
  setFilter,
  filter
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TradeTableDataType | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function handleRowClick(row: TradeTableDataType) {
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
        key={1}
        toggleItems={trades}
        noCard={noCard}
        type={type}
        setParams={setTradeParams}
        tableBody={
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row?.id}
                onMouseEnter={() => !isMobile && setHoveredId(row.id)}
                onMouseLeave={() => !isMobile && setHoveredId(null)}
                onClick={() => handleRowClick(row)}
                sx={{
                  '&:last-child td': {
                    border: 0,
                  },
                  '&:last-child th': { border: 0 },
                  cursor: 'pointer',
                  bgcolor:
                    !isMobile && hoveredId === row.id
                      ? 'action.hover'
                      : 'transparent',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row.type === 'BUY' ? 'خرید' : 'فروش'}</Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1" sx={{ color: handleColorStatus(row.status) }}>
                      {handleTitleStatus(row.status)}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">
                      {row.amount_gr} گرم
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">
                      {priceFormater(row.price_per_gram)} تومان
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">
                      {priceFormater(row.total_amount)} تومان
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">
                      {row.tracking_code}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 2.5,
                    px: 2.5,
                  }}
                >
                  {formatDate(row.created_at)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    py: 2.5,
                    px: 0,
                    width: 0,
                    minWidth: 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <ArrowBackIos
                    sx={{
                      fontSize: 13,
                      color: 'primary.main',
                      display: 'block',
                      opacity: isMobile || hoveredId === row.id ? 1 : 0,
                      transition: isMobile
                        ? 'none'
                        : 'opacity 0.15s ease, transform 0.15s ease',
                      transform:
                        isMobile || hoveredId === row.id
                          ? 'translateX(0)'
                          : 'translateX(6px)',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
        tableHead={[
          'نوع معامله',
          'وضعیت',
          'مقدار طلا',
          'قیمت',
          'قیمت نهایی',
          'کد پیگیری',
          'تاریخ',
          '',
        ]}
        listLength={data.length}
      />

      {/* مودال دیتیل */}
      <TradeDetailModal
        open={modalOpen}
        setOpen={setModalOpen}
        data={selectedTransaction}
      />
    </>
  );
}
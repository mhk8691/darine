import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';
import priceFormater from '@/app/core/PriceFormater';
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types';
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { statuses } from '../gift-cards/GiftCardOrder';

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
interface Props{
  setTradeParams:Dispatch<SetStateAction<string>>,
  data:TradeTableDataType[],type?:'chip'|'toggle',
  noCard?:boolean
    setFilter: Dispatch<SetStateAction<string>>
    setDateRange:Dispatch<SetStateAction<DatePickerValue|null>>
    filter:string
    dateRange:DatePickerValue|null
}
export default function TradesTable({setTradeParams,data,type='toggle',noCard=true,dateRange,setDateRange,setFilter,filter}:Props) {
  return (
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
      tableBody={<TableBody>
            {data?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{
                  '&:last-child td': {
                    border: 0,
                  },
                  '&:last-child th': { border: 0 },
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
                    <Typography variant="body1">{row.type === 'BUY' ? 'خرید':'فروش'}</Typography>
                  
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
                    <Typography variant="body1" sx={{color:handleColorStatus(row.status)}}>{handleTitleStatus(row.status)}</Typography>
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
                    <Typography
                      variant="body1"
                    
                    >
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
                    <Typography
                      variant="body1"
                    
                    >
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
                    <Typography
                      variant="body1"
                    
                    >
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
                    <Typography
                      variant="body1"
                    
                    >
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
                
              </TableRow>
            ))}
          </TableBody>}
      tableHead={[
        'نوع معامله',
        'وضعیت',
        'مقدار طلا',
        'قیمت',
        'قیمت نهایی',
        'کد پیگیری',
        'تاریخ',
      ]}
      listLength={data.length}
    />
  );
}

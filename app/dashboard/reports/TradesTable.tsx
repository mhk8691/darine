import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';
import priceFormater from '@/app/core/PriceFormater';
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types';
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

const trades: ToggleItemsType[] = [
  {
    title: 'خرید',
    value: 'buy',
    id: 1,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'فروش',
    value: 'sell',
    id: 2,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
];

export default function TradesTable({data,type='toggle',noCard=true}:{data:TradeTableDataType[],type?:'chip'|'toggle',noCard?:boolean}) {
  return (
    <OrderDetail
      key={1}
      toggleItems={trades}
      noCard={noCard}
      type={type}
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
                        {priceFormater(row.fee)} تومان
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
        'کارمزد',
        'قیمت نهایی',
        'کد پیگیری',
        'تاریخ',
      ]}
      listLength={data.length}
    />
  );
}

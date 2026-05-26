import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType, ToggleItemsType } from '@/app/core/Types';
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

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

export default function OrdersTable({data}:{data:OrdersDataType[]}) {
  return (
    <OrderDetail
      key={1}
      toggleItems={receiveItems}
      type="toggle"
      noCard
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
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{priceFormater(row.total_toman_amount)}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      تومان
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row.delivery_type}</Typography>
                  </Stack>
                </TableCell>
               
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
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
                        {row.payment_method}
                    </Typography>
                  </Stack>
                </TableCell>
                  <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
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
                        {row.status}
                    </Typography>
                  </Stack>
                </TableCell>
                 <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
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
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  {row.tracking_code}
                </TableCell>
                
                <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  {formatDate(row.created_at)}
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>}
      tableHead={[]}
      listLength={0}
    />
  );
}

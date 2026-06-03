import { formatDate } from '@/app/core/FormatDate'
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus'
import priceFormater from '@/app/core/PriceFormater'
import { LimitOrderDataType } from '@/app/core/Types'
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function LimitOrderTable({data}:{data:LimitOrderDataType[]}) {
  return (
    <TableBody>
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
                    <Typography variant="body1">{row.order_type === 'BUY' ? 'خرید':'فروش'}</Typography>
                  
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
                        {priceFormater(row.target_price)} تومان
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
                        {row.order_type === 'BUY'?  `${priceFormater(row.amount_toman)} تومان` :`${priceFormater(row.gold_weight)} گرم`} 
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
                    <Typography variant="body1" sx={{color:handleColorStatus(row.status)}}>{handleTitleStatus(row.status)}</Typography>
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
          </TableBody>
  )
}

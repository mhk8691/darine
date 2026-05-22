import { formatDate } from '@/app/core/FormatDate'
import priceFormater from '@/app/core/PriceFormater'
import { RecentTransactionDataType } from '@/app/core/Types'
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function TransactionTable({data}:{data:RecentTransactionDataType[]}) {
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
                    <Typography variant="body1">{priceFormater(row.amount)}</Typography>
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
                    <Typography variant="body1">{row.type_display}</Typography>
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
                        {row.method_display}
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
                        {row.status_display}
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
                        {row.receipt_image}
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
                        {row.user_card_number}
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
                  {row.description}
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
          </TableBody>
  )
}

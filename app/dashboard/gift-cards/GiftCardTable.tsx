import { formatDate } from '@/app/core/FormatDate'
import { GiftCardListType } from '@/app/core/Types'
import { Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function GiftCardTable({giftCardsList}:{giftCardsList:GiftCardListType[]}) {
  return (
    <TableBody>
            {giftCardsList?.map((row) => (
              <TableRow
                key={row?.serial_number}
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
                    <Typography variant="body1">{row.serial_number}</Typography>
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
                    <Typography variant="body1">{row.weight}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      گرم
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
                      sx={{
                        color: row.is_used ? 'success.main' : 'warning.main',
                      }}
                    >
                      {row.is_used ? 'استفاده شده' : 'استفاده نشده'}
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
          </TableBody>
  )
}

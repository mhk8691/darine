import { formatDate } from '@/app/core/FormatDate'
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus'
import priceFormater from '@/app/core/PriceFormater'
import { RecentTransactionDataType } from '@/app/core/Types'
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import React, { useState } from 'react'

export default function TransactionTable({
  data,
  onRowClick,
}: {
  data: RecentTransactionDataType[]
  onRowClick?: (row: RecentTransactionDataType) => void
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <TableBody>
      {data?.map((row) => (
        <TableRow
          key={row.id}
          onMouseEnter={() => !isMobile && setHoveredId(row.id)}
          onMouseLeave={() => !isMobile && setHoveredId(null)}
          onClick={() => onRowClick?.(row)}
          sx={{
            '&:last-child td': {
              border: 0,
            },
            '&:last-child th': {
              border: 0,
            },
            cursor: onRowClick ? 'pointer' : 'default',
            bgcolor:
              !isMobile && hoveredId === row.id
                ? 'action.hover'
                : 'transparent',
            transition: 'background-color 0.15s ease',
          }}
        >
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              justifyContent="center"
            >
              <Typography variant="body1">
                {priceFormater(row.amount)} تومان
              </Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              justifyContent="center"
            >
              <Typography variant="body1">
                {row.type_display}
              </Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              justifyContent="center"
            >
              <Typography variant="body1">
                {row.method_display}
              </Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              justifyContent="center"
            >
              <Typography
                variant="body1"
                sx={{ color: handleColorStatus(row.status) }}
              >
                {handleTitleStatus(row.status)}
              </Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
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

          <TableCell
            align="center"
            sx={{ fontSize: '16px', py: 2.5, px: 2.5 }}
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
  )
}
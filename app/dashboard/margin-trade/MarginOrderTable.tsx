import { formatDate } from '@/app/core/FormatDate'
import { MarginOrderDataType } from '@/app/core/Types'
import {
  IconButton,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import BlockIcon from '@mui/icons-material/Block'
import { cancelLimitOrder } from '@/lib/limit-order/limitOrder'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { isAxiosError } from 'axios'
import { cancelMarginOrder } from '@/lib/margin-order/marginOrder'

interface Props {
  data: MarginOrderDataType[]
  getData: () => Promise<void>
}

export default function MarginOrderTable({
  getData,
  data,
}: Props) {
  const handleRemove = async (id: number) => {
    try {
      const response = await cancelMarginOrder(id)
      await getData()
      showSnackbar(response?.data?.message ?? response?.message, 'success')
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message, 'error')
      }
    }
  }

  return (
    <TableBody>
      {data?.map((row) => (
        <TableRow
          key={row.id}
          sx={{
            '&:last-child td': { border: 0 },
            '&:last-child th': { border: 0 },
          }}
        >
          {/* نوع معامله */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.order_type_display}</Typography>
          </TableCell>

          {/* وضعیت */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography
              sx={{
                color:
                  row.status_display === 'لغو شده'
                    ? 'error.main'
                    : row.status_display === 'تکمیل شده'
                    ? 'success.main'
                    : 'warning.main',
              }}
            >
              {row.status_display}
            </Typography>
          </TableCell>

          {/* سود / زیان */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.profit_loss_display}</Typography>
          </TableCell>

          {/* ضریب */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.leverage_display}</Typography>
          </TableCell>

          {/* وزن */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.weight}</Typography>
          </TableCell>

          {/* قیمت ورود */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.entry_price}</Typography>
          </TableCell>

          {/* قیمت هدف */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.target_price || '-'}</Typography>
          </TableCell>

          {/* حد سود */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.take_profit || '-'}</Typography>
          </TableCell>

          {/* حد ضرر */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.stop_loss || '-'}</Typography>
          </TableCell>

          {/* قیمت بسته شدن */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography>{row.close_price || '-'}</Typography>
          </TableCell>

          {/* تاریخ */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            {formatDate(row.created_at)}
          </TableCell>

          {/* حذف */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <IconButton
              onClick={() => handleRemove(row.id)}
              disabled={row.status_display === 'لغو شده'}
            >
              <BlockIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
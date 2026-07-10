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
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { isAxiosError } from 'axios'
import { cancelMarginOrder } from '@/lib/margin-order/marginOrder'
import priceFormatter from '@/app/core/PriceFormater'

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
      showSnackbar(response?.message, 'success')
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
            <Typography variant='body2'>{row.order_type_display}</Typography>
          </TableCell>

          {/* وضعیت */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography
              sx={{
                color:row.status === 'ACTIVE' ? 'success.main':'error.main'
              }}
            >
              {row.status_display}
            </Typography>
          </TableCell>

          {/* سود / زیان */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2' color={+row.profit_loss_display >= 0 ? 'success':'error'}>{priceFormatter(+row.profit_loss_display)} تومان</Typography>
          </TableCell>

          {/* ضریب */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{row.leverage_display}</Typography>
          </TableCell>

          {/* وزن */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.weight)} گرم</Typography>
          </TableCell>

          {/* قیمت ورود */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.entry_price)} تومان</Typography>
          </TableCell>

          {/* قیمت هدف */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.target_price) || '-'} تومان</Typography>
          </TableCell>

          {/* حد سود */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.take_profit )|| '-'} تومان</Typography>
          </TableCell>

          {/* حد ضرر */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.stop_loss) || '-'} تومان</Typography>
          </TableCell>

          {/* قیمت بسته شدن */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Typography variant='body2'>{priceFormatter(+row.close_price) || '-'} تومان</Typography>
          </TableCell>

          {/* تاریخ */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            {formatDate(row.created_at)}
          </TableCell>

          {/* حذف */}
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <IconButton
              onClick={() => handleRemove(row.id)}
              disabled={row.status === 'CLOSED'}
            >
              <BlockIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
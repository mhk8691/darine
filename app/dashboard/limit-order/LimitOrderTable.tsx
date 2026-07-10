import { formatDate } from '@/app/core/FormatDate'
import { handleColorStatus, handleTitleStatus } from '@/app/core/handleStatus'
import priceFormater from '@/app/core/PriceFormater'
import { LimitOrderDataType } from '@/app/core/Types'
import { IconButton, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import BlockIcon from '@mui/icons-material/Block';
import { cancelLimitOrder } from '@/lib/limit-order/limitOrder'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { isAxiosError } from 'axios'

interface Props {
  setPrice: Dispatch<SetStateAction<string>>
  setId: Dispatch<SetStateAction<number>>
  setTargetPrice: Dispatch<SetStateAction<string>>
  setEditMode: Dispatch<SetStateAction<boolean>>
  setGold: Dispatch<SetStateAction<string>>
  setSelect: Dispatch<SetStateAction<string>>
  data: LimitOrderDataType[]
  getData: () => Promise<void>
  setTab: Dispatch<SetStateAction<number>>
  onEditScroll: () => void 
}

export default function LimitOrderTable({
  setTab,
  getData,
  setId,
  data,
  setGold,
  setPrice,
  setSelect,
  setTargetPrice,
  setEditMode,
  onEditScroll,
}: Props) {
  const handleEdit = async (row: LimitOrderDataType) => {
    setPrice(row.total_amount)
    setTargetPrice(row.price_per_gram)
    setGold(row.amount_gr)
    setSelect(row.type === 'BUY' ? 'min' : 'max')
    setEditMode(true)
    setId(row.id)
    setTab(row.type === 'BUY' ? 0 : 1)
    onEditScroll()
  }

  const handleRemove = async (id: number) => {
    try {
      const response = await cancelLimitOrder(id)
      getData()
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
          key={row?.id}
          sx={{
            '&:last-child td': { border: 0 },
            '&:last-child th': { border: 0 },
          }}
        >
          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
              <Typography variant="body1">{row.type_display}</Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
              <Typography variant="body1">{priceFormater(+row.price_per_gram)} تومان</Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
              <Typography variant="body1">{priceFormater(+row.total_amount)} تومان</Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
              <Typography variant="body1">{priceFormater(+row.amount_gr)} گرم</Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ py: 2.5, px: 2.5 }}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
              <Typography variant="body1" sx={{ color: row.status === 'CANCELLED' ? 'error.main' : row.status === 'COMPLETED'?'success.main':'warning.main' }}>
                {row.status_display}
              </Typography>
            </Stack>
          </TableCell>

          <TableCell align="center" sx={{ fontSize: '16px', py: 2.5, px: 2.5 }}>
            {row.tracking_code}
          </TableCell>

          <TableCell align="center" sx={{ fontSize: '16px', py: 2.5, px: 2.5 }}>
            {formatDate(row.created_at)}
          </TableCell>

          <TableCell align="center" sx={{ fontSize: '16px', py: 2.5, px: 2.5 }}>
            <IconButton onClick={() => handleEdit(row)}>
              <ModeEditIcon />
            </IconButton>
          </TableCell>

          <TableCell align="center" sx={{ fontSize: '16px', py: 2.5, px: 2.5 }}>
            <IconButton onClick={() => handleRemove(row.id)} disabled={row.status === 'CANCELLED'}>
              <BlockIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
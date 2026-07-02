import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { formatDate } from '@/app/core/FormatDate';
import priceFormater from '@/app/core/PriceFormater';
import { PriceAlertsDataType } from '@/app/core/Types';
import { getPriceAlerts, toggleStatusPriceAlert } from '@/lib/priceAlert/priceAlert';
import { Button, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import React, { Dispatch, SetStateAction } from 'react'


interface Props{
    priceAlertsData:PriceAlertsDataType[]
    setPriceAlertId:Dispatch<SetStateAction<number>>
    setOpen:Dispatch<SetStateAction<boolean>>
    setPriceAlerts:Dispatch<SetStateAction<PriceAlertsDataType[]>>
  filter:string,
  date:DatePickerValue
}
export default function PriceAlertsTable({priceAlertsData,setOpen,setPriceAlertId,setPriceAlerts,filter,date}:Props) {
  const handleToggleStatus = async (id:number)=>{
    try{
      const res = await toggleStatusPriceAlert(id)
      
      const response = await getPriceAlerts(filter,date);
      showSnackbar(res.message,'success')
         
    setPriceAlerts([])
    setPriceAlerts(response && response?.length > 0 ? response : []);
    }
    catch(error:unknown) {
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  return (
        <TableBody>
                {priceAlertsData?.map((row) => (
                  <TableRow
                    key={row?.target_price}
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
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={0.5}
                        justifyContent={'center'}
                      >
                        <Typography variant="body1">{priceFormater(row.target_price)}</Typography>
                        <Typography variant="body2" fontSize={12}>
                          تومان
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={0.5}
                        justifyContent={'center'}
                      >
                        <Typography variant="body1">{row.alert_type === 'BELOW' ? 'در قیمت پایین تر':'در قیمت  بالاتر'}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        py: 2,
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
                            color: row.is_active ? 'success.main' : 'error.main',
                          }}
                        >
                          {row.is_active ? 'فعال' : 'غیر فعال'}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: '16px',
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      {row.max_notifications}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: '16px',
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      {formatDate(row.created_at)}
                    </TableCell>
                     <TableCell
                      align="center"
                      sx={{
                        fontSize: '16px',
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      <Button
                        variant="outlined"
                        color={row.is_active ? 'primary' : 'secondary'}
                        onClick={() => {
                          handleToggleStatus(row.id)
                        }}
                        sx={{
                          py: 1.2,
                          px: 1.5,
                          width:'109px'
                        }}
                      >
                        {row.is_active ? 'غیرفعال کردن':'فعال کردن'}
                      </Button>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: '16px',
                        py: 2,
                        px: 2.5,
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setPriceAlertId(row.id);
                          setOpen(true);
                        }}
                        sx={{
                          py: 1.2,
                          px: 1.5,
                        }}
                      >
                        حذف آلارم
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
  )
}

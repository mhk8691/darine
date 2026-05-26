import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import Products from './Products';
import { Grid } from '@mui/material';

// const items: ToggleItemsType[] = [
//   {
//     title: 'تحویل درب منزل',
//     value: 'doorstepdelivery',
//     id: 1,
//     emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
//   },
//   {
//     title: 'تحویل حضوری',
//     value: 'personDelivery',
//     id: 2,
//     emptyMessage: 'سفارشی برای شما به ثبت نرسیده است',
//   },
// ];

export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 1,
        sm: 3,
      }}
    >
      <Grid size={12}>
        <WalletHeader />
      </Grid>
    <Products/>
      {/* <Grid size={12}>
        <OrderDetail
          type="chip"
          title="لیست تحویل‌های اخیر"
          toggleItems={items}
          tableBody={   <TableBody>
            {deliveryData?.map((row) => (
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
          </TableBody>}
          tableHead={['test']}
          listLength={deliveryData.length}
        />
      </Grid> */}
    </Grid>
  );
}

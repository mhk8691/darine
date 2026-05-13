// import CustomModal from '@/app/Components/CustomModal/CustomModal'
// import { BuyGoldDataType, SellGoldDataType } from '@/app/core/Types'
// import { Close } from '@mui/icons-material'
// import { Divider, IconButton, Stack, Typography, Button } from '@mui/material'
// import React, { Dispatch, SetStateAction } from 'react'

// interface Props{
//     title:string,
//     open:boolean,
//     setOpen:Dispatch<SetStateAction<boolean>>
//     data:BuyGoldDataType | SellGoldDataType
// }

// export default function TradeGoldConfirmation({open,setOpen,title,data}:Props) {
//   return (
//     <CustomModal open={open} setOpen={setOpen} modalStyle={{p:2}}>
// <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
//         <Typography variant="body1" fontSize={18}>
//          {title}
//         </Typography>
//         <IconButton onClick={() => setOpen(false)} disableRipple>
//           <Close />
//         </IconButton>
//       </Stack>
//       {/* <Typography variant="body2" sx={{mt:2}}>
//         شما درحال خرید {data.details?.weight_gr} گرم طلا با حساب 1.00 درصد کارمزد معادل {data.details?.total_paid_toman} تومان هستید
//       </Typography> */}
//       {/* <Stack direction={'row'} gap={1} alignItems={'center'}>
//            <Typography variant="body2" sx={{mt:2}}>
//        کسری موجودی:
//       </Typography>   <Typography variant="body2" sx={{mt:2}}>
//        {data.details.}
//       </Typography>
//       </Stack> */}
//         <Stack direction={'column'} gap={1}  mt={3}>
//             <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
//                 <Typography variant="body2" >
// وزن طلا:
//                 </Typography>
//                   <Typography variant="body2" >
//                     {data.details?.weight_gr}
//                 </Typography>
//             </Stack>
//             <Divider/>
//              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
//                 <Typography variant="body2" >
// مبلغ کل خرید:
//                 </Typography>
//                   <Typography variant="body2" >
//                      {data.details?.total_paid_toman}
//                 </Typography>
//             </Stack>
//             <Divider/> <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
//                 <Typography variant="body2" >
// موجودی کیف پول:
//                 </Typography>
//                   <Typography variant="body2" >
//                     0 تومان
//                 </Typography>
//             </Stack>
//         </Stack>
//         <Button variant="contained" color="primary" sx={{width:'100%',py:1.2,fontSize:18,borderRadius:2,mt:3}}>
//           پرداخت
//         </Button>
//     </CustomModal>
//   )
// }

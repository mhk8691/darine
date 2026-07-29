import CustomModal from '@/app/Components/CustomModal/CustomModal'
import Loading from '@/app/Components/Loading/Loading'
import { Close } from '@mui/icons-material'
import { Divider, IconButton, Stack, Typography, Button } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction} from 'react'

export interface OrderListType {
    title:string
    value:string
}

interface Props {
  title: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
children:ReactNode
  handleSubmit: () => Promise<void>
  isLoading: boolean
  data:OrderListType[]
  isEnoughBalance:boolean
}



export default function CustomOrderConfirmation({open, setOpen, title, handleSubmit, isLoading,children,data,isEnoughBalance}: Props) {
  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" fontSize={18}>
          {title}
        </Typography>
        <IconButton onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Stack>
        {children}
        
      <Stack direction={'column'} gap={1} mt={3}>
        {
            data.map((item,index)=>(
                <>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
                    <Typography variant="body2">{item.title}</Typography>
                    <Typography variant="body2">{item.value}</Typography>
                </Stack>
                 {
                    index !== data.length -1 &&<Divider />
                 }
                </>
            ))
        }
        

  
      </Stack>

      <Button
        variant="contained"
        color="primary"
        disabled={isLoading || isEnoughBalance === false}
        sx={{ width: '100%', py: 1.2, fontSize: 18, borderRadius: 2, mt: 3 }}
        onClick={() => handleSubmit()}
      >
        {isLoading ? <Loading size={30} /> : 'تایید'}
      </Button>
    </CustomModal>
  )
}
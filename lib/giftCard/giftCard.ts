import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import api from '@/lib/api';
import { isAxiosError } from 'axios';
export const giftCardSubmit = async (serialNumber:string)=>{
   try{
     const response =await api.post<{
        message:string
    }>('/gold/giftcard/redeem/',{serial_number:serialNumber})
    showSnackbar(response.data.message,true)
   }catch(error:unknown){
    if(isAxiosError(error)){
        showSnackbar(error.response?.data.error)
    }
   }
}
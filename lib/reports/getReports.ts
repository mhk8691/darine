import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import  api  from '@/lib/api';
import { isAxiosError } from 'axios';
export const getGiftCardList = async ()=>{
    try{
        const response = await api.get('/gold/giftcard/list/')
        return response.data
    }catch(error:unknown){
        if(isAxiosError(error)){
            showSnackbar(error.response?.data.error)
        }
    }
}
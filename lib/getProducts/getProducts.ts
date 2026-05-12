import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { ProductDateType } from '@/app/core/Types';
import  api  from '@/lib/api';
import { isAxiosError } from 'axios';
export const getProducts = async ()=>{
    try{
        const response = await api.get<ProductDateType[]>('/gold/products/')
        console.log('232')
        return response.data
    }catch(error:unknown){
        if (isAxiosError(error)){
            showSnackbar(error.response?.data.error)
        }
    }
}
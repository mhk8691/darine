import { ProductDateType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const addToCart = async (productId:number)=>{
    const response = await api.post<{message:string}>('/gold/cart/',{
        product_id:productId
    })
    return response.data
}
export const getCart = async ()=>{
    const response = await api.get<ApiResponse<ProductDateType[]>>('/gold/cart/')
    return response.data
}
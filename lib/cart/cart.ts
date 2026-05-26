import api, { ApiResponse } from "../api"

export const addToCart = async (productId:number)=>{
    const response = await api.post<{message:string}>('/gold/cart/',{
        product_id:productId
    })
    return response.data
}
export const getCart = async ()=>{
    const response = await api.get<ApiResponse<CartDataType>>('/gold/cart/')
    return response.data.data
}
export const removeProduct = async (productId:number)=>{
    const response = await api.delete<{message:string}>(`/gold/cart/?id=${productId}`)
    return response.data
}

export const EditCart = async (quantity:number,productId:number)=>{
    const response = await api.put<{message:string}>(`/gold/cart/?id=${productId}`,{
        quantity
    })
    return response.data
}
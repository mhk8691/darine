import api from "../api"

export const addToCart = async (productId:number)=>{
    const response = await api.post<{message:string}>('/gold/cart/',{
        product_id:productId
    })
    return response.data
}
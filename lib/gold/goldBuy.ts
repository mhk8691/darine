import { BuyGoldDataType } from "@/app/core/Types"
import { api } from "../api"

export const goldBuy = async (price:string)=>{
    const response = await api.post<BuyGoldDataType>('/gold/buy/',{toman:price})
    return response
}
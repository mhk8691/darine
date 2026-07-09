import { BuyCalculateType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const buyCalculate = async (weight:string)=>{
     const roundGold = Math.round(+weight * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/gold/buy/calculate/',{
            "payment_method": "WALLET",
    "weight": roundGold
    })
    return response.data
}

export const sellCalculate = async (weight:string)=>{
     const roundGold = Math.round(+weight * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/gold/sell/calculate/',{
            "payment_method": "WALLET",
    "weight": roundGold
    })
    return response.data
}
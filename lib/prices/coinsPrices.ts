import { PricesDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const getCoinsPrices = async ()=>{
    const response = await api.get<ApiResponse<PricesDataType[]>>('/gold/price/coin/')
    return response.data.data
}
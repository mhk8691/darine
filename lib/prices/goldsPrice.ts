import { PricesDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const getGoldsPrices = async ()=>{
    const response = await api.get<ApiResponse<PricesDataType[]>>('/gold/price/gold/')
    return response.data.data
}
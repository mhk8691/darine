import { ChartGoldDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const getChartGold = async (filter:string)=>{
    const response = await api.get<ApiResponse<ChartGoldDataType>>(`/gold/chart/?filter=${filter}`)
    return response.data.data
}
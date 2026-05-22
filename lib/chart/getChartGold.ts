import { ChartGoldDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

const getChartGold = async ()=>{
    const response = await api.get<ApiResponse<ChartGoldDataType>>('/gold/chart/')
    return response.data.data
}
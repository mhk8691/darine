import api, { ApiResponse } from "../api"

const getChartGold = async ()=>{
    const response = await api.get<ApiResponse<>>('/gold/chart/')
    return response.data.data
}
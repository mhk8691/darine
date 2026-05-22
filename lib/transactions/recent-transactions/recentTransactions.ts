import { RecentTransactionDataType } from "@/app/core/Types"
import api, { ApiResponse } from "@/lib/api"

export const getRecentTransaction = async ()=>{
    const response = await api.get<ApiResponse<RecentTransactionDataType[]>>('/gold/recent-transactions/')
    return response.data.data
}
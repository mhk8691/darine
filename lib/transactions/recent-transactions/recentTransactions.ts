import { RecentTransactionDataType } from "@/app/core/Types"
import api, { ApiResponse } from "@/lib/api"

export const getRecentTransaction = async (filter:string)=>{
    const response = await api.get<ApiResponse<RecentTransactionDataType[]>>(`/gold/recent-transactions/?filter_type=${filter}`)
    return response.data.data
}
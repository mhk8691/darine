
import { RecentDeliveriesDataType } from "@/app/core/Types"
import api, { ApiResponse } from "@/lib/api"

export const getRecentDelivery = async ()=>{
    const response = await api.get<ApiResponse<RecentDeliveriesDataType[]>>('/gold/recent-deliveries/')
    return response.data.data
}
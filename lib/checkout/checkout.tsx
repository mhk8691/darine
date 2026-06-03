import { CheckoutDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const checkout = async (data:CheckoutDataType)=>{
    const response = await api.post<ApiResponse<CheckoutDataType>>('/gold/physical-order/',data)
    return response
}
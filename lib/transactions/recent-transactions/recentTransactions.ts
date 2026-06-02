import { DatePickerValue } from "@/app/Components/DatePicker/CustomDatePicker"
import { RecentTransactionDataType } from "@/app/core/Types"
import api, { ApiResponse } from "@/lib/api"

export const getRecentTransaction = async (params:string,filter:string,date:DatePickerValue)=>{
    const response = await api.get<ApiResponse<RecentTransactionDataType[]>>(`/gold/recent-transactions/?type=${params}&start_date=${date?.from}&end_date=${date?.to}filter=${filter}`)
    return response.data.data
}
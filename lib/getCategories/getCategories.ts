import { CategoriesDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const getCategories = async ()=>{
    const response = await api.get<ApiResponse<CategoriesDataType[]>>('/gold/product/categories/')
    return response.data
}
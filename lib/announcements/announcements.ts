import { AnnouncementsType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar"
import { isAxiosError } from "axios"

export const getAnnouncements = async ()=>{
    try{
        const response = await api.get<ApiResponse<AnnouncementsType[]>>('/gold/announcements/')
        return response.data.data
    }catch(error:unknown){
        if (isAxiosError(error)){

            showSnackbar(error.response?.data.message)
        }
    }
}
import { AnnouncementsType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar"
import { isAxiosError } from "axios"

export const getAnnouncements = async ()=>{
    try{
        const response = await api.get<ApiResponse<AnnouncementsType>>('/gold/announcements/')
        return response.data.data
    }catch(error:unknown){
        if (isAxiosError(error)){

            showSnackbar(error.response?.data.message)
        }
    }
}


export const markAllRead = async ()=>{
        const response = await api.post<{
            message:string
        }>('/gold/announcements/mark-all-read/')
        return response.data
    
}
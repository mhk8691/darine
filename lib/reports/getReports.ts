import { GiftCardListType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
export const getGiftCardList = async () => {
    const response = await api.get<ApiResponse<GiftCardListType[]>>('/gold/gift-card/list/');
    return response.data.data;
};

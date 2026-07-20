import { ReactNode } from 'react';

export interface ToggleItemsType {
  title: string;
  value: string;
  id: number;
  emptyMessage?: string;
}
export interface MenuType {
  id?: number;
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}


export interface NotifItemsType {
  title: string;
  message: string;
  date: string;
}



export interface CartItem extends ProductDateType {
  quantity: number;
}

export interface ActionButtonType {
  title: string;
  icon: ReactNode | string;
  link: string;
}
export interface AppbarItemsType {
  name: string;
  image: string;
  link?: string;
  comingSoon?:boolean
}



export interface LoginDtaType {
  refresh: string;
  access: string;
  role: string;
  status: string;
  full_name: string;
}

export interface BuyGoldDataType {
  details: {
    weight_gr: number;
    price_per_gram: number;
    fee_toman: number;
    total_paid_toman: number;
  };
}

export interface SellGoldDataType {
  details: { sold_weight: number; payout_toman: number; wallet_balance: number };
}

export interface BankCardDataType {
  id: number;
  shaba_number: string;
  bank_name: string;
  is_active: boolean;
  owner_full_name:string
}
export interface DepositDataType {
  card_number: string;
  sheba: string;
full_name:string
}

export interface WithdrawDataType {
  added_weight?: string;
  new_wallet_balance: string;
}

export interface AllAssetsDataType {
"total_asset_value": number,
  "gold_balance": number,
  "silver_balance": number,
  "wallet_balance": number,
  "gold_asset_value": number,
  "silver_asset_value": number,
  "gold_price": number,
  "silver_price": number
  gold_accessible:number
   "gold_price_with_fees": {
        "buy": number,
        "sell": number
    },
      "fees": {
        "gold_buy_fee": number,
        "gold_sell_fee": number,
    },
}

export interface StatisticsDataType {
  total_assets: number
  profit: number
  wallet_balance: number
  blocked_wallet_balance: number
  gold_balance: number
  blocked_gold_balance: number
  gold_price: number
  gold_asset_value: number
  withdrawn_gold: number
  purchased_giftcards: number
  received_giftcards: number
  pending_toman: number
  pending_gold: number
}
  export interface ProductDateType {
    id: number;
    name: string;
    category?: string;
    weight: number;
    product_weight_with_fee?:number;
    total_price: number;
    image: string;
    inventory_count?:number
  }


export interface OrderItemDataType {
  id: number;
  status: string;
  total_gold: number;
  created_at: string;
}
export interface GiftCardSubmitDataType {
  message: string;
  total_price: number;
  order_id: number;
}
export interface GiftCardListType {
  serial_number: string;
  weight: string;
  is_used: boolean;
  created_at: string;
}
export interface WalletHeaderDataType {
  total_assets_value: number;
  description: string;
  gold_balance_gr: number;
  toman_balance: number;
}
export interface RefrraDataType {
 "referral_code": string,
        "referral_percent": number,
        "total_gold_sales":number,
        "total_earnings":number,
        "referrals_count":number,
}

export interface PriceAlertsDataType {
  id: number;
  target_price: number;
  alert_type: string;
  alert_type_display: string;
  is_active: boolean;
  created_at: string;
  max_notifications:number
}
export interface ChartGoldDataType {
  "chart": {
      "labels": string[],
      "prices": number[]  },
    "stats": {
      "current_price": number,
      "highest_price": number,
      "lowest_price": number,
      "change_percent": number,
        "daily_change_percent":number,
            "weekly_change_percent": number,
            "monthly_change_percent": number
    
    } 
    
     "bubble": {
            "buy_price": number,
            "sell_price": number,
            "bubble_amount":number,
            "bubble_percent":number,
            "is_positive": boolean
        }}

export interface RecentTransactionDataType{
      id: number;
      amount: number;
      type: string;
      type_display: string;
      method: string;
      method_display: string;
      status: StatusType;
      status_display: string;
      receipt_image_url: string | null;
      user_card: string | null;
      user_card_number: string | null;
      admin_note: string | null;
      tracking_code: string;
      description: string;
      created_at: string;
      updated_at: string;
}


export type StatusType="COMPLETED" | 'FAILED' | 'PENDING'
export interface TradeTableDataType {
    "id": number,      "type": "BUY" | 'SELL',      "status": StatusType,      "amount_gr": number,      "price_per_gram": number,      "fee": number,      "total_amount": number,      "tracking_code": string,      "created_at": string
}
export interface OrdersDataType {
admin_note:string

  id: number;
  tracking_code: string;
  status: 'REQUESTED' | 'PREPARING' | 'DELIVERING' | 'DELIVERED' | 'CANCELLED';
  payment_method_display: string;
  delivery_type_display: string;
  total_toman_amount: number;
  payment_method:'GOLD' | 'TOMAN'
  created_at: string;
  total_gold_amount:number

  items: {
                    "id": number,
                    "product": number,
                    "product_name": string,
                    "quantity": number,
                    "price_at_time": number,
                    "weight_at_time": number
                }[]
}
export interface CartDataType {
  items	:{
    id:number,
    product:number,
    porudct_details:ProductDateType
    quantity	:number
total_gold:number
total_price	:number
  }[],
total_price:	number,
total_gold:	number,
count	:number,
}
export interface AddressesDataType {
    "id"?: number,
      "type"?: string,
      "province": string,
      "city":string,
      "address":string
      "postal_code": string,
      "plaque": string,
      "unit": string
}

export interface LimitOrderDataType {
  "id": number,
            "type": "BUY" | 'SELL',
            "type_display": string,
            "status": "EXECUTED" | 'CANCELLED' | 'PENDING',
            "status_display": string,
            "amount_gr":string,
            "price_per_gram": string,
            "total_amount": string,
            "tracking_code": string,
            "created_at": string,
}

export interface MarginOrderDataType    {
        "id": number,
        "order_type_display": string,
        "status_display": string,
        "profit_loss_display": string,
        "leverage_display": "1x",
        "weight": string,
        "entry_price": string,
        "target_price": string,
        "take_profit": string,
        "stop_loss": string,
        "close_price": string,
        "created_at": string,
        status:'ACTIVE' | 'CLOSED'
      }

export interface PricesDataType {
  "type": string,
        "currentRate": number,
        "minPriceDay": number,
        "maxPriceDay": number,
        "dayChange": number,
        "percentChange": number,
}
export interface CategoriesDataType {
            "id": number,
            "name": string,
            "slug": string
}
export interface CheckoutDataType {
  products:{
    product_id:number
    quantity:number
  }[],
    "payment_method": string,

}
export interface BannersType {
  link:string
  image:string
  
}

export interface AnnouncementsType {
  notifList:{
  link:string
  title:string
  description:string
  created_at:string
  }[]
  unread_count:number
}

export interface BuyCalculateType{
  "gold_price": number,
        "gold_weight":number,
        "pure_gold_price": 19790472.0,
        "fee_rate": number,
        "fee": number,
        "total_toman": number,
        "enough_balance": true
           "wallet": {
        "accessible_toman": number,
        "blocked_toman": number,
        "remaining_toman":number
    }
} 

export interface LimitOrderCalculateType {
  order_type: 'BUY' | 'SELL'
  current_price: number
  target_price: number
  gold_weight: number
  fee_rate: number
  fee: number
  pure_price: number
  total_price: number
  enough_balance: boolean
  inventory?: {
    accessible_balance: number
    blocked_balance: number
    remaining_balance: number
  }
  wallet?: {
    accessible_toman: number
    blocked_toman: number
    remaining_toman: number
  }
}

// app/core/Types/ticket.ts
// در صورت نیاز، این تایپ‌ها را داخل ماژول اصلی '@/app/core/Types' خودتان merge/export کنید

export interface TicketCategoryType {
  id: number;
  name: string;
}

export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';

export type TicketStatus = 'open' | 'pending' | 'answered' | 'closed';

export interface TicketType {
  id: number;
  title: string;
  description: string;
  category: number | TicketCategoryType;
  priority: TicketPriority;
  status: TicketStatus;
  created_at: string;
  updated_at?: string;
  unread_count?: number;
  attachment?: string | null; // URL فایل پیوست تیکت (در صورت وجود)
}

export interface TicketMessageType {
  id: number;
  message: string;
  is_admin?: boolean;
  sender_name?: string;
  created_at: string;
  attachment?: string | null; // URL فایل پیوست پیام (در صورت وجود)
}

export interface CreateTicketPayload {
  title: string;
  description: string;
  category: number;
  priority: TicketPriority;
  attachment?: File | null;
}

export interface SendMessagePayload {
  message: string;
  attachment?: File | null;
}

export interface UnreadCountType {
  unread_count: number;
}
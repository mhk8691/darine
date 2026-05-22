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
export interface TableGoldDataType {
  typeGold?: string;
  currentRate: number;
  minPriceDay: number;
  maxPriceDay: number;
  dayChange: number;
  monthChange: number;
  weeklyChart: number;
}

export interface NotifItemsType {
  title: string;
  message: string;
  date: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface CartItem extends Product {
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
}

export interface AssetsDataType {
  gold_balance_gr: number;
  current_gold_price: number;
toman_balance	:number
total_assets	:number
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
  card_number: string;
  bank_name: string;
  is_active: boolean;
}
export interface DepositDataType {
  card_number: string;
  shaba: string;
  owner: string;
  account: string;
}

export interface WithdrawDataType {
  added_weight?: string;
  new_wallet_balance: string;
}

export interface AllAssetsDataType {
  total_assets_value: number;
  gold_balance_gr: number;
  silver_balance_gr: number;
  wallet_balance_toman: number;
  gold_value_toman: number;
  silver_value_toman: number;
  live_gold_price: number;
  live_silver_price: number;
}

export interface ProductDateType {
  id: number;
  name: string;
  category: string;
  weight: string;
  total_weight_with_fees: string;
  image: string;
  is_active: boolean;
}
export interface CartItemDataType {
  id: number;
  product_name: string;
  weight: number;
  toman: number;
  quantity: number;
}
export interface CartDataType {
  items: CartItemDataType[];
  total_gold: number;
  total_toman: number;
  user_gold_balance: number;
  user_wallet_balance: number;
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
  referral_code: string;
  total_invited: number;
  total_earned_toman: number;
  commission_rate: string;
  message: string;
}

export interface PriceAlertsDataType {
  id: number;
  target_price: number;
  alert_type: string;
  alert_type_display: string;
  is_active: boolean;
  created_at: string;
}
export interface ChartGoldDataType {
  "labels": string[],
    "prices": number[],
    "highest_price": number,
    "lowest_price": number,
    "change_percent": 0,
}

export interface RecentTransactionDataType{
    "id": number,
      "amount": number,
      "type":'DEPOSIT'|'WITHDRAW',
      "method": string,
      "status":  StatusType,
      "tracking_code": string,
      "created_at": string,
}

export interface RecentDeliveriesDataType{
    "id": number,
      "amount": number,
      "type": string,
      "type_display": string,
      "method": string,
      "method_display": string,
      "status": string,
      "status_display": string,
      "receipt_image": string | null,
      "user_card": string | null,
      "user_card_number": string | null,
      "admin_note": string,
      "tracking_code": string,
      "description": string,
      "created_at": string,
      "updated_at": string,
}
export type StatusType="COMPLETED" | 'FAILED' | 'PENDING'
export interface TradeTableDataType {
    "id": number,      "type": "BUY" | 'SELL',      "status": StatusType,      "amount_gr": number,      "price_per_gram": number,      "fee": number,      "total_amount": number,      "tracking_code": string,      "created_at": string
}
export interface OrdersDataType{
  "id": 1,      "tracking_code": string,      "status": StatusType,      "payment_method": string,      "delivery_type": string,      "total_toman_amount": number,      "created_at": string
}
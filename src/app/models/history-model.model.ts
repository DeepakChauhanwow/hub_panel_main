export class HistoryModelData {
  unique_id: number;
  user_first_name: string;
  user_last_name:string;
  phone: number;
  source_address: string;
  address: any = [];
  total: number;
  service_type_name: string;
  total_distance: number;
  total_time: number;
  total_waiting_time: number;
  totalcharge: number;
  base_price: number;
  base_price_distance: number;
  base_price_time: number;
  price_for_waiting_time: number;
  min_fare: number;
  fixed_price: number;
  totaltax: number;
  tax_fee: number;
  user_tax_fee: number;
  totalOtherCharge: number;
  is_surge_hours: number;
  user_miscellaneous_fee: number;
  tip_amount: number;
  toll_amount: number;
  promo_payment: number;
  userpayment: number;
  cash_payment: number;
  card_payment: number;
  wallet_payment: number;
  user_create_time: number;
  accepted_time: number;
  provider_arrived_time: number;
  provider_trip_start_time: number;
  provider_trip_end_time: number;
  picture: string = '';
  latitude: any = null;
  longitude: any = null;
  res_data: any;
  tripdetail: any;
  _id : string;
  confirmed_provider : any;









}
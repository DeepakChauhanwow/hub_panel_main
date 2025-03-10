export class DriverModel{
    _id:string = '';
    first_name:string = '';
    last_name:string = '';
    picture:string = '';    
    email:string = '';
    phone:string = '';
    password:string='';
    address: any;
    is_active: boolean = false;
    is_approved:boolean = false;
    is_document_uploaded:boolean = false;
    is_email_verified:boolean = false;
    is_use_wallet:boolean = false;
    is_phone_number_verified:boolean = false;
    cart_id:string = '';
    login_by:string = '';
    token: string = '';
    social_id: string = '';
    social_ids:Array<string> = [];    
    country:string='';
    country_code: string = '';
    country_id: string = '';
    country_phone_code: string = '';
    city: string='';
    city_id: string='';
    wallet_currency_code: string = '';
    user_type: number = 1;
    is_referral:number= 0;
    referral_code:string='';    
    provider_type: any;
    partner_company_name:any;
    service_type:any;
    zipcode:any;
    created_at:any;    
    type_name: string = '';
    is_document_expired: boolean = false;
}

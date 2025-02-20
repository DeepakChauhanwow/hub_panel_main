import { Injectable } from "@angular/core";
import { Helper } from "../shared/helper";
import { ApiService } from "./api.service";

@Injectable({ providedIn: 'root' })
export class PaymentService {


    constructor(private _api: ApiService, private _helper: Helper) { }

    // get_card_list(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_card_list, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response.data);
    //                 } else {
    //                     resolve([]);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }

    // delete_card(parameters): Promise<boolean> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.delete_card, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(true);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }

    // get_stripe_add_card_intent(parameters): Promise<string> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_stripe_add_card_intent, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response.data.client_secret);
    //                 } else {
    //                     resolve(null);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(null);
    //         }
    //     })
    // }

    // _get_stripe_add_card_intent(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_stripe_add_card_intent, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response.data);
    //                 } else {
    //                     resolve([]);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }


    // get_stripe_payment_intent_wallet(parameters): Promise<{ client_secret: string, last_four: string, payment_method: string, error: string }> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_stripe_payment_intent_wallet, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve({ ...response.data, error: '' });
    //                 } else {
    //                     resolve({
    //                         client_secret: null,
    //                         last_four: null,
    //                         payment_method: null,
    //                         error: response.data.error
    //                     });
    //                 }
    //             })
    //         } catch (err) {
    //             resolve({
    //                 client_secret: null,
    //                 last_four: null,
    //                 payment_method: null,
    //                 error: err.message
    //             });
    //         }
    //     })
    // }

    // add_card(parameters): Promise<boolean> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.add_card, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(true);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }

    // select_card(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {                
    //             this._api.post({ url: apiColletions.select_card, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }

    // get_paystack_payment_intent_wallet(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_stripe_payment_intent_wallet, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(response);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }
    // get_payu_payment_intent_wallet(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_stripe_payment_intent_wallet, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(response);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }

    // send_paystack_required_detail(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.send_paystack_required_detail, parameters }).then((response) => {
    //                 if (response) {
    //                     resolve(response);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(null);
    //         }
    //     })
    // }

    // add_wallet_amount(parameters): Promise<boolean> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.add_wallet_amount, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(true);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }
    // wallet_status(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.change_user_wallet_status, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(response);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }

    // pay_stripe_intent_payment(parameters): Promise<boolean> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.pay_stripe_intent_payment, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(true);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }
    // addBank(bankForm): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.add_bank_detail, parameters:bankForm }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(response);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }
    // getBankDetail(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.get_bank_detail, parameters }).then((response) => {
    //                 if (response.data) {
    //                     resolve(response.data);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }
    
    // deleteBankDetail(parameters): Promise<any> {        
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.delete_bank_detail, parameters }).then((response) => {
    //                 if (response) {
    //                     resolve(response);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve([]);
    //         }
    //     })
    // }

    // paypal_supported_currency(parameters): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         try {
    //             this._api.post({ url: apiColletions.paypal_supported_currency, parameters }).then((response) => {
    //                 if (response.success) {
    //                     resolve(response.data);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //         } catch (err) {
    //             resolve(false);
    //         }
    //     })
    // }
    
}

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { apiColletions } from "../constants/api_collection";
import { UserModel } from "../models/user.model";
import { Helper } from "../shared/helper";
import { ApiService } from "./api.service";
import { EncryptionDecryptionService } from "./encrypt-decrypt.service";


@Injectable({ providedIn: 'root' })
export class AuthService {

    public logginUser: UserModel;
    public user_details: any;
    public loginSubject = new BehaviorSubject<UserModel>(null);
    loginObservable: Observable<UserModel> = this.loginSubject.asObservable();


    get isAuthenticated(): boolean {
        return (!this.logginUser || this.logginUser === null) ;
    }

    constructor(private _api: ApiService, private helper: Helper,private _encryptionDecryptionService:EncryptionDecryptionService) {
        if(localStorage.getItem('userData')){
            this._encryptionDecryptionService.decryptData(localStorage.getItem('userData')).then((response) => {
                this.user_details = response;
            })
        }
    }

    //generate recaotcha token
    async generateRecaptchaToken(): Promise<any> {
        try {
            let parameters = {};
            const response = await this._api.post({ url: apiColletions.get_provider_setting_detail, parameters })
            if (response.success) {
                const is_use_captcha = response.data.setting_detail.is_use_captcha;
                if (is_use_captcha) {
                    return await new Promise((resolve, reject) => {
                        grecaptcha.ready(() => {
                            const recaptcha_site_key = response.data.setting_detail.recaptcha_site_key_for_web;
                            grecaptcha.execute(recaptcha_site_key, { action: 'submit' }).then((token) => {
                                resolve(token)
                            })
                        });
                    });
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    // Login
    async login(parameters: any): Promise<boolean> {
        try {
            const captcha_token = await this.generateRecaptchaToken();
            if (captcha_token) {
                parameters['captcha_token'] = captcha_token;
            }
            const response = await this._api.post({ url: apiColletions.login, parameters })
            if (response.success) {
                this.logginUser = response.data.hub;
                let localStorageData = {
                    _id: this.logginUser._id,
                    token: this.logginUser.token,
                    email: this.logginUser.email,
                    first_name: this.logginUser.first_name,
                    last_name: this.logginUser.last_name,
                    country_phone_code: this.logginUser.country_phone_code,
                    hub_id: this.logginUser.hub_id,
                    phone: this.logginUser.phone,
                    is_approved: this.logginUser.is_approved
                }
                this.helper.user_details = localStorageData;
                const encryptedDta = await this._encryptionDecryptionService.encryptData(localStorageData);
                localStorage.setItem('userData', encryptedDta);
                localStorage.setItem('newEncryptUserData', encryptedDta);

                this.loginSubject.next(this.logginUser);

                return true;
            } else {
                return false;
            }
        } catch (err) {
            return true;
        }
    }

    //logout
    async logout(parameters): Promise<boolean> {
        try {
            const response = await this._api.post({ url: apiColletions.logout, parameters: parameters })
            if (response.success) {
                this.logginUser = null;
                this.loginSubject.next(this.logginUser);
                localStorage.removeItem('userData');
                localStorage.removeItem('newEncryptUserData');
                localStorage.removeItem('device_token')
                this.helper.isUpadtedlocalStorage();
                this.helper._route.navigate(['/partner/login'])
                return true
            } else {
                return null
            }
        } catch (error) {
            return null;
        }
    }

    //reset password
    async new_password(parameters): Promise<boolean> {
        try {
            const response = await this._api.post({ url: apiColletions.new_password, parameters })
            if (response.success) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    async forgotPasswordPhone(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_otp, parameters })
            if (response.success) {
                return response.data;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
}

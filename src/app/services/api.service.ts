import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Helper } from "../shared/helper";
import { EncryptionDecryptionService } from "./encrypt-decrypt.service";
import { lastValueFrom } from "rxjs";

export interface ResponseModel {
    success: boolean;
    code: string
    data: any;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    get_api_is_loading = false;
    post_api_is_loading = false;
    getwithparams_api_is_loading = false;
    private API_URL = environment.API_URL;
    constructor(private _http: HttpClient, private helper: Helper, private _encryptionDecryptionService: EncryptionDecryptionService) { }
    async post({ url, parameters }): Promise<ResponseModel> {
        try {
            this.post_api_is_loading = true;
            let headers
            if (this.helper.user_details) {
                headers = new HttpHeaders()
                    .set('admin_id', this.helper.user_details._id)
                    .set('token', this.helper.user_details.token)
                    .set('type', '9')
                    .set('lang_code', localStorage.getItem('theme_lang') || 'en');
            }
            let call_url = this.getBaseUrl(url) + url;
            let data: any;
            let api_responseType: any;

            //if encryption decryption enabled from environment then encrypt data
            if (environment.api_encryption_decryption) {
                //headers set for encryption
                if (this.helper.user_details) {
                    headers = headers.set('encryption', '1')
                } else {
                    headers = new HttpHeaders()
                        .set('encryption', '1')
                }
                //encrypt the request data
                const encryptData = await this._encryptionDecryptionService.APIEncryptData(parameters);
                data = { encryptedData: encryptData };
                //api response type text because of in response getting encrypted data
                api_responseType = 'text';
            } else {
                data = parameters;
                //api response type text because of in response getting json data
                api_responseType = 'json';
            }
            const responseData = await lastValueFrom(this._http.post(call_url, data, { headers: headers, responseType: api_responseType }));
            let decryptedresponseData: any;
            //if encryption decryption enabled then decryt encrypted data other wise send data as it is
            if (environment.api_encryption_decryption) {
                decryptedresponseData = await this._encryptionDecryptionService.APIdecryptData(responseData);
            } else {
                decryptedresponseData = responseData;
            }
            setTimeout(() => {
                if (this.post_api_is_loading) {
                    this.post_api_is_loading = false;
                }
            }, 500);
            if (decryptedresponseData['success']) {
                return { success: decryptedresponseData['success'], code: decryptedresponseData['success_code'], data: decryptedresponseData }
            } else if (decryptedresponseData['error_code'] == 4002) {
                setTimeout(() => {
                    localStorage.removeItem('userData');
                    localStorage.removeItem('newEncryptUserData');
                    this.helper.isUpadtedlocalStorage();
                    this.helper._route.navigate(['/']).then(() => {
                        window.location.reload();
                    })
                }, 500);
                return { success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: decryptedresponseData }
            } else {
                return { success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: decryptedresponseData }
            }
        } catch (err) {
            return { success: false, code: "2003", data: null };
        }
    }

    get({ url, parameters }): Promise<ResponseModel> {
        this.get_api_is_loading = true;
        let headers
        if (this.helper.user_details) {
            headers = new HttpHeaders()
                .set('admin_id', this.helper.user_details._id)
                .set('token', this.helper.user_details.token)
                .set('type', '9')
                .set('lang_code', localStorage.getItem('theme_lang') || 'en');
        }
        return new Promise((resolve, rejects) => {
            try {
                let call_url = this.getBaseUrl(url) + url;
                let api_responseType: any;
                if (environment.api_encryption_decryption) {
                    //headers set for encryption
                    if (this.helper.user_details) {
                        headers = headers.set('encryption', '1')
                    } else {
                        headers = new HttpHeaders()
                            .set('encryption', '1')
                    }
                    //api response type text because of in response getting encrypted data
                    api_responseType = 'text';
                } else {
                    //api response type text because of in response getting json data
                    api_responseType = 'json';
                }
                lastValueFrom(this._http.get(call_url, { headers: headers, responseType: api_responseType })).then(async responseData => {
                    let decryptedresponseData: any;
                    //if encryption decryption enabled then decryt encrypted data other wise send data as it is
                    if (environment.api_encryption_decryption) {
                        decryptedresponseData = await this._encryptionDecryptionService.APIdecryptData(responseData);
                    } else {
                        decryptedresponseData = responseData;
                    }
                    setTimeout(() => {
                        if (this.get_api_is_loading) {
                            this.get_api_is_loading = false;
                        }
                    }, 500);
                    if (!decryptedresponseData) {
                        resolve({ success: true, code: '', data: null })
                    } else if (decryptedresponseData['success']) {
                        resolve({ success: decryptedresponseData['success'], code: decryptedresponseData['success_code'], data: decryptedresponseData })
                    } else if (decryptedresponseData['error_code'] == 4002) {
                        setTimeout(() => {
                            localStorage.removeItem('userData');
                            localStorage.removeItem('newEncryptUserData');
                            this.helper.isUpadtedlocalStorage();
                            this.helper._route.navigate(['/']).then(() => {
                                window.location.reload();
                            })
                        }, 500);
                        resolve({ success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: decryptedresponseData })
                    } else {
                        resolve({ success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: null })
                    }
                })
            } catch (err) {
                resolve({ success: false, code: "2003", data: null });
            }
        });
    }

    async getwithparams({ url, params }): Promise<ResponseModel> {
        try {
            this.getwithparams_api_is_loading = true;
            let headers
            if (this.helper.user_details) {
                headers = new HttpHeaders()
                    .set('admin_id', this.helper.user_details._id)
                    .set('token', this.helper.user_details.token)
                    .set('type', '9');
            }
            let call_url = this.getBaseUrl(url) + url;
            let api_responseType: any;
            if (environment.api_encryption_decryption) {
                //headers set for encryption
                if (this.helper.user_details) {
                    headers = headers.set('encryption', '1')
                } else {
                    headers = new HttpHeaders()
                        .set('encryption', '1')
                }
                //api response type text because of in response getting encrypted data
                api_responseType = 'text';
            } else {
                //api response type text because of in response getting json data
                api_responseType = 'json';
            }
            const responseData = await lastValueFrom(this._http.get(call_url, { params: params, headers: headers, responseType: api_responseType }));
            let decryptedresponseData: any;
            //if encryption decryption enabled then decryt encrypted data other wise send data as it is
            if (environment.api_encryption_decryption) {
                decryptedresponseData = await this._encryptionDecryptionService.APIdecryptData(responseData);
            } else {
                decryptedresponseData = responseData;
            }
            setTimeout(() => {
                if (this.getwithparams_api_is_loading) {
                    this.getwithparams_api_is_loading = false;
                }
            }, 500);
            if (!decryptedresponseData) {
                return { success: true, code: '', data: null }
            } else if (decryptedresponseData['success']) {
                return { success: decryptedresponseData['success'], code: decryptedresponseData['success_code'], data: decryptedresponseData }
            } else if (decryptedresponseData['error_code'] == 4002) {
                setTimeout(() => {
                    localStorage.removeItem('userData');
                    localStorage.removeItem('newEncryptUserData');
                    this.helper.isUpadtedlocalStorage();
                    this.helper._route.navigate(['/']).then(() => {
                        window.location.reload();
                    })
                }, 500);
                return { success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: decryptedresponseData }
            } else {
                return { success: decryptedresponseData['success'], code: decryptedresponseData['error_code'], data: decryptedresponseData }
            }
        } catch (err) {
            return { success: false, code: "2003", data: null };
        }
    }

    getBaseUrl(url) {
        if (url.split("/")[1] == "payments") {
            return environment.PAYMENTS_API_URL
        }
        if (url.split("/")[1] == "earning" || url.split("/")[1] == "history") {
            return environment.HISTORY_API_URL
        }
        return environment.API_URL
    }

}

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { apiColletions } from "../constants/api_collection";
import { UserModel } from "../models/user.model";
import { ApiService } from "./api.service";
import { Helper } from "../shared/helper";

@Injectable({ providedIn: 'root' })
export class ProfileService {

    public logginUser: UserModel;
    private loginSubject = new BehaviorSubject<UserModel>(this._helper.user_details);
    loginObservable: Observable<UserModel> = this.loginSubject.asObservable();

    constructor(private _api: ApiService, private _helper: Helper) { }

    async fetch_profile(parameters): Promise<any> {
        parameters.is_show_success_toast = false;
        try {
            const response = await this._api.post({ url: apiColletions.get_profile_detail, parameters })
            if (response.success) {
                return response.data;
            } else {
                return null
            }
        } catch (err) {
            return null;
        }
    }
}
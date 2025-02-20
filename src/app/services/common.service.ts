import { Injectable } from "@angular/core";
import { apiColletions } from "../constants/api_collection";
import { ApiService } from "./api.service";
import { BehaviorSubject } from "rxjs";

export interface Lang {
    code: string,
    name: string
    string_file_path: string
}

@Injectable({ providedIn: 'root' })
export class CommonService {

    public _exportChanges = new BehaviorSubject<any>(null);
    __exportChangesObservable = this._exportChanges.asObservable()

    constructor(private _api: ApiService) { }

    async get_setting_detail(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_provider_setting_detail, parameters })
            if (response.success) {
                return response.data
            } else {
                return null
            }
        } catch (err) {
            return null
        }
    }

    async getLanguageList(): Promise<any> {
        try {
            const response = await this._api.get({ url: apiColletions.get_language_list, parameters: [] })
            if (response.success) {
                return response.data
            } else {
                return null
            }
        } catch (error) {
            return null;
        }
    }


}



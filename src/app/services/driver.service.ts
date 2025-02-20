import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';
import { apiColletions } from '../constants/api_collection';
import { HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DriverService {
    constructor(private _api: ApiService) { }

    async get_driver(data): Promise<any> {
        try {
            let params = new HttpParams();
            params = params.append('hub_id', data.hub_id);
            params = params.append('type', data.type);
            params = params.append('page', data.page);
            params = params.append('limit', data.limit);
            if (data.header) {
                params = params.append('header', data.header);
            }
            if (data.is_excel_sheet) {
                params = params.append('is_excel_sheet', data.is_excel_sheet);
            }

            if (data.search_value && data.search_item) {
                params = params.append('search_item', data.search_item);
                params = params.append('search_value', data.search_value);
            }

            const response = await this._api.getwithparams({ url: apiColletions.get_driver_data, params })
            if (response.success) {
                return response.data
            } else {
                return true;
            }
        } catch (error) {
            return false;
        }
    }

    async get_driver_list(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_driver_data, parameters })
            if (response.success) {
                return response.data;
            } else {
                return null;
            }
        } catch (err) {
            return null;
        }
    }

    async get_provider_list(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_provider_data, parameters })
            if (response.success) {
                return response.data
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async get_available_vehicle_list(parameters: any): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_vehicle_data, parameters })
            if (response.success) {
                return response.data
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

}


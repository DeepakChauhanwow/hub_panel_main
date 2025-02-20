import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { apiColletions } from '../constants/api_collection';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    constructor(private _api: ApiService) { }

    // get_promocode(parameters): Promise<any> {
    //   return new Promise((resolve, reject) => {

    //     try {
    //       this._api.post({ url: apiColletions.apply_promo_code, parameters }).then(response => {
    //         if (response.success) {
    //           resolve(response.data)

    //         } else {
    //           resolve([])
    //         }
    //       })
    //     } catch {
    //       resolve([])
    //     }
    //   })
    // }


    async get_server_time(): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_server_time, parameters: {} })
            return response.data
        } catch {
            return []
        }
    }

    // add_new_vehicle(parameters):Promise<any>{
    //   return new Promise((resolve,reject)=>{
    //     try {
    //       this._api.post({url:apiColletions.provider_add_vehicle,parameters}).then(response => {
    //         if (response.success) {
    //           resolve(response.data)

    //         } else {
    //           resolve([])
    //         }
    //       })
    //     } catch (error) {
    //         reject(error)
    //     }
    //   })
    // }

    async get_vehicles_list(parameters: any): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_vehicle_data, parameters })
            if (response.success) {
                return response.data
            } else {
                return []
            }
        } catch {
            return []
        }
    }

    async get_vehicle_detials(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_provider_vehicle_detail, parameters })
            if (response.success) {
                return response.data
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async changeVehicle(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.change_current_vehicle, parameters })
            if (response.success) {
                return response.data
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async getVehicleHistory(parameters): Promise<any> {
        try {
            const response = await this._api.post({ url: apiColletions.get_hub_vehicle_history, parameters })
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

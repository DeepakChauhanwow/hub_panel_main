import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, lastValueFrom, Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class LocationModel {
    latitude: number = null;
    longitude: number = null;
    address: string = '';
    city_name: string = '';
    country_name: string = '';
    country_code: string = '';
    state_code: string = '';
    state_name: string = '';
    // constructor(){}
}

export interface CurrentLocation {
    city1: string,
    city2: string,
    city3: string,
    country: string,
    country_code: string,
    country_code_2: string,
    city_code: string,
    latitude: any,
    longitude: any,
    address: string
}

@Injectable({ providedIn: 'root' })
export class LocationService {

    public _current_location: LocationModel = new LocationModel();
    public locationSubject = new BehaviorSubject<LocationModel>(null);
    locationObservable: Observable<LocationModel> = this.locationSubject.asObservable();

    constructor(private _http: HttpClient) { }

    get current_location() {
        return this._current_location;
    }

    set current_location(location) {
        this._current_location = location;
        localStorage.setItem('current_location', JSON.stringify(this.current_location));
        this.locationSubject.next(this._current_location);
    }

    set_current_location(): Promise<LocationModel> {
        return new Promise((resolve, rejects) => {
            try {
                let location = JSON.parse(localStorage.getItem('current_location'));
                if (location) {
                    this.current_location = location;
                    this.locationSubject.next(this.current_location);
                    resolve(this.current_location);
                } else {
                    navigator.geolocation.getCurrentPosition((location) => {
                        this.geocoder({ latitude: location.coords.latitude, longitude: location.coords.longitude }).then(response => {
                            this.current_location.latitude = location.coords.latitude;
                            this.current_location.longitude = location.coords.longitude;
                            this.current_location.address = response['formatted_address'];
                            response['address_components'].forEach(element => {
                                let type = element.types[0]
                                switch (type) {
                                    case 'country':
                                        this.current_location.country_name = element.long_name;
                                        this.current_location.country_code = element.short_name;
                                        break;
                                    case 'administrative_area_level_1':
                                        this.current_location.state_code = element.short_name;
                                        this.current_location.state_name = element.long_name;
                                        break;
                                    case 'administrative_area_level_2':
                                        this.current_location.city_name = element.short_name;
                                        break;
                                    case 'postal_code':
                                        break;
                                    default:
                                        break;
                                }
                            });
                            localStorage.setItem('current_location', JSON.stringify(this.current_location));
                            this.locationSubject.next(this.current_location);
                            resolve(this.current_location)
                        }).catch((error) => {
                            console.error(error)
                            resolve(null)
                        })
                    }, error => {
                        resolve(null)
                    })
                }
            } catch (error) {
                resolve(null);
            }
        })
    }


    async geocoder({ latitude, longitude }) {
        try {
            const response = await lastValueFrom(this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${environment.GOOGLE_KEY}`, {}));
            if (response['status'] === 'OK' && response['results'].length) {
                return response['results'][0];
            } else {
                return null;
            }
        } catch (err) {
            return null;
        }
    }

}

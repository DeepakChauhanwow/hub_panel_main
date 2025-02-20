import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private _api: ApiService) { }

}

import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  constructor(private _api:ApiService) { }
  
}

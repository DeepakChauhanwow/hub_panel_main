import { Injectable, NgZone, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { DATE_FORMAT, TRIP_STATUS_TYPE_VALUE, TRIP_STATUS_TYPE_VALUE_STRING, VEHICLE_HISTORY_TYPE, VEHICLE_HISTORY_TYPE_STRING, VEHICLE_TYPE } from "../constants/constants";
import { TranslateService } from "@ngx-translate/core";
import { DEFAULT_IMAGE } from 'src/app/constants/constants';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EncryptionDecryptionService } from "../services/encrypt-decrypt.service";
@Injectable({
    providedIn: 'root'
})

export class Helper {
    public DATE_FORMAT = DATE_FORMAT;
    public DEFAULT_IMAGE= DEFAULT_IMAGE;
    public VEHICLE_TYPE = VEHICLE_TYPE;
    public VEHICLE_HISTORY_TYPE = VEHICLE_HISTORY_TYPE;
    public VEHICLE_HISTORY_TYPE_STRING = VEHICLE_HISTORY_TYPE_STRING;
    public TRIP_STATUS_TYPE_VALUE_STRING = TRIP_STATUS_TYPE_VALUE_STRING;
    public TRIP_STATUS_TYPE_VALUE = TRIP_STATUS_TYPE_VALUE;
    public image_url = environment.IMAGE_URL;
    selected_id:string = '';
    history_type:string = '';
    to_fixed_number: number = 2;
    uploadFile = ["image/jpeg" , "image/jpg" , "image/png"] ;
    uploadDocFile = ["image/jpeg" , "image/jpg" , "image/png" , "application/pdf"] ;
    islogin: boolean = false;
    public user_details: any;
    public created_at = new BehaviorSubject<any>(null);
    created_date = this.created_at.asObservable();
    public decimal = new BehaviorSubject<any>(null);
    decimal_number = this.decimal.asObservable();
    randomQueryParam : any = `random=${Math.random()}`;

    token: any;
    language_is_loading: boolean = true;

    constructor(public http: HttpClient,public _route: Router,public trans: TranslateService,public ngZone: NgZone,@Inject(DOCUMENT) private _documentRef: any,private _encryptionDecryptionService:EncryptionDecryptionService) {
        if(localStorage.getItem('userData')){
            this._encryptionDecryptionService.decryptData(localStorage.getItem('userData')).then((response) => {
                this.user_details = response;
            })
        }
        this.decimal_number.subscribe(number => {
            if(number || number == 0){
                this.to_fixed_number = number;
            }
        })
    }

    async isUpadtedlocalStorage() {
        if(localStorage.getItem('userData')){
            this.user_details = await this._encryptionDecryptionService.decryptData(localStorage.getItem('userData'));
        }else{
            this.user_details = null;
        }
    }
    phone_number_validation(evt) {
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode === 101) {
            return false;
        }
        return true;
    }

    number_validation(evt, value = 0) {
        if (evt.key === '.' && value != null && (value.toString().indexOf('.') === value.toString().lastIndexOf('.'))) {
            return false;
        }
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            if (charCode == 46) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }

    decimalNum_validation(evt, value = 0) {
        if (evt.key === '.' && value != null && (value.toString().indexOf('.') === value.toString().lastIndexOf('.'))) {
            return true;
        }
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            if (charCode == 46) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }

    keyUpDown(evt) {
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode == 38 || charCode == 40 || evt.key == 'ArrowUp' || evt.key == 'ArrowDown') {
            return false;
        }
    }

    space_validation(evt) {
        if (evt.code == "Space" && evt.target.value.length < 1) {
            return false;
        }
        return true
    }
    nospace_validation(evt) {
        if (evt.code == "Space") {
            return false;
        }
        return true
    }

    check_email(email) {
        let email_validation = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;

        if (!email_validation.test(email)) {
            return false;
        }
        return true;
    }

    get generate_new_uuid(): string {
        return 'xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    loadGoogleScript(url) {
        return new Promise((resolve, reject) => {
            if (!document.querySelector('script[src="' + url + '"]')) {
                const script = this._documentRef.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                script.text = ``;
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            } else {
                resolve(true);
            }
        })
    }
    downloadImage(url: string, fileName: string) {
        const a: any = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.style = 'display: none';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }
    downloadUrl(url: string) {
        return this.http.get(url, { responseType: 'blob' }).pipe(switchMap(response => this.readFile(response)));
    }

    private readFile(blob: Blob): Observable<string> {
        return new Observable(obs => {
          const reader = new FileReader();

          reader.onerror = err => obs.error(err);
          reader.onabort = err => obs.error(err);
          reader.onload = () => obs.next(reader.result as string);
          reader.onloadend = () => obs.complete();

          reader.readAsDataURL(blob);

          // Cleanup function
          return () => {
            reader.abort();
          };
        });
      }
    getWeekDay(date){
        date = new Date(date);
        let first = date.getDate() - date.getDay();
        let start_date:any = new Date(date.setDate(first))
        let last = first + 6;
        let end_date:any = new Date(date.setDate(last))
        if(first <= 0){
          end_date = new Date(date.setDate(last))
          end_date = new Date(new Date(end_date).setMonth(new Date(end_date).getMonth() + 1))
        }else{
          end_date = new Date(date.setDate(last))
        }
        start_date = new Date(new Date(start_date).setHours(0,0,0,0)).toUTCString()
        end_date = new Date(new Date(end_date).setHours(0,0,0,0)).toUTCString()
        return [start_date,end_date];
    }

    getWeekDays(date,index){
        date = new Date(date);
        let today_date = new Date();

        let first ;
        if(index != 0){
            first = date.getDate() + 1;
        }else{
            first = date.getDate();
        }
        let start_date: any = new Date(date.setDate(first))

        if (start_date.getTime() < today_date.getTime()) {
            let last;
            if (first > 31) {
                last = 6;
            } else {
                last = first + 6;
            }
            let end_date: any = new Date(date.setDate(last))
            return [start_date, end_date];
        }
    }


    downloadFile(res: any) {
        this.http.get(res, { responseType: 'blob' as const }).subscribe(fileData => {
            const blob: any = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            let filename = res.split('xlsheet/')
            let link = document.createElement("a");

            if (link.download !== undefined) {
              let url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", filename[1]);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          }
        );
    }
}



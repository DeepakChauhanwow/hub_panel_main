import { Component, OnInit} from '@angular/core';
import { DEFAULT_IMAGE } from 'src/app/constants/constants';
import { AuthService } from 'src/app/services/auth.service';
import { Helper } from 'src/app/shared/helper';
import { environment } from 'src/environments/environment';
import { LangService, Language } from 'src/app/shared/lang.service';
@Component({
  selector: 'app-topnav2',
  templateUrl: './topnav2.component.html',
  styleUrls: ['./topnav2.component.scss']
})

export class Topnav2Component implements OnInit {
  languages: Language[];
  isSingleLang;
  IMAGE_URL = environment.IMAGE_URL;
  DEFAULT_USER_PROFILE = DEFAULT_IMAGE.USER_PROFILE;

  constructor(public helper: Helper,private _authService:AuthService, private langService: LangService) { 
    this.languages = this.langService.supportedLanguages;
    this.isSingleLang = this.langService.isSingleLang;
  }

  ngOnInit(): void {
   
    if (this.helper.user_details) {      
      this.helper.islogin = false;
    }
    if (this.helper.user_details == null) {
      this.helper._route.navigate(['/hub/login'])
    }
  }
  signOut() {
    this._authService.logout({_id:this.helper.user_details._id});       
  }
  onLanguageChange(lang): void {
    this.langService.language = lang.code;
  }
}

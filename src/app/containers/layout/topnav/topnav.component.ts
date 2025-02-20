import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISidebar } from '../sidebar/sidebar.service';
import { LangService, Language } from 'src/app/shared/lang.service';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { environment } from 'src/environments/environment';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';
import { Helper } from 'src/app/shared/helper';
import { DEFAULT_IMAGE } from 'src/app/constants/constants';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  languages: Language[];
  isSingleLang;
  IMAGE_URL = environment.IMAGE_URL;
  DEFAULT_USER_PROFILE = DEFAULT_IMAGE.USER_PROFILE;
  darkTheme = localStorage.getItem('vien-themecolor')
  logoClr:boolean=false;  
  adminRoot = environment.adminRoot;
  sidebar: ISidebar;
  subscription: Subscription;
  displayName = 'Sarah Cortney';  
  currentLanguage: string;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = ''; 
  appName: any;

  constructor(private authService: AuthService,private langService: LangService,public helper: Helper,private _socket:SocketService,private _commonService:CommonService) {
    this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.langService.languageShorthand;
    this.isSingleLang = this.langService.isSingleLang;
    this.isDarkModeActive = getThemeColor().indexOf('dark') > -1;
  }

  onDarkModeChange(event): void {
    let color = getThemeColor();
    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    setThemeColor(color);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  fullScreenClick(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreen(event): void {
    if (document.fullscreenElement) {
      this.isFullScreen = true;
    } else {
      this.isFullScreen = false;
    }
  }

  onLanguageChange(lang): void {
    this.langService.language = lang.code;
    this.currentLanguage = this.langService.languageShorthand;
  }

  async ngOnInit(): Promise<void> {
    if(this.darkTheme.startsWith('dark') ){
      this.logoClr=true;
    }
    if (this.helper.user_details == null) {
      this.helper._route.navigate(['/hub/login'])
    }
    if (this.helper.user_details) {
      this.socket(this.helper.user_details._id)
      this.getSettingDetails();

      let json: any = { partner_id: this.helper.user_details._id }
      json.is_show_success_toast = false;
    }
  }

  socket(id: any) {
    let listner = id;
    this._socket.listener(listner).subscribe((res: any) => {          
      if (res.is_admin_decline) {
        this.authService.logout({_id:this.helper.user_details._id,is_admin_decline:true}).then(()=>{})
      }
    })
  }

  signOut() {
    this.authService.logout({_id:this.helper.user_details._id});           
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event): void {
    const input = document.querySelector('.mobile-view');
    if (input?.classList) {
      input.classList.remove('mobile-view');
    }
    this.searchKey = '';
  }

  getSettingDetails(){
    this._commonService.get_setting_detail({}).then((setting_detail) => {
      this.helper.decimal.next(setting_detail.setting_detail.decimal_point_value);
    })
  }

}

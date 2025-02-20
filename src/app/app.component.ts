import { Component, OnInit, Renderer2, AfterViewInit, Injectable } from '@angular/core';
import { LangService } from './shared/lang.service';
import { environment } from 'src/environments/environment';
import { CommonService } from './services/common.service';
import { Helper } from './shared/helper';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {
  isMultiColorActive = environment.isMultiColorActive;
  isWhatsAppChat = environment.isWhatsAppChat;
  constructor(private langService: LangService, private renderer: Renderer2,private _commanService:CommonService,private _helper:Helper,private _authService:AuthService) {
    let newEncryptUserData = localStorage.getItem('newEncryptUserData');
    let userData = localStorage.getItem('userData');
    if(userData && (newEncryptUserData !== userData)){
      this._helper.user_details = null;
      localStorage.removeItem('newEncryptUserData');
      localStorage.removeItem('userData');
      localStorage.removeItem('device_token');
      this._helper.isUpadtedlocalStorage();
      this._helper._route.navigate(['/hub/login']);
      this._authService.loginSubject.next(null);
    }
  }

  ngOnInit(): void {
    this.langService.init();
    let json :any = {};
    this._commanService.get_setting_detail(json).then((user_setting_detail) => {
      if(user_setting_detail.success && user_setting_detail.setting_detail.is_use_captcha && user_setting_detail.setting_detail.recaptcha_site_key_for_web){
        this._helper.loadGoogleScript("https://www.google.com/recaptcha/api.js?render=" + user_setting_detail.setting_detail.recaptcha_site_key_for_web);
      }
    })
    if (environment.isJivoChat) {
      this.loadJivoScript();
    }
  }

  loadJivoScript() {
    const script = document.createElement('script');
    script.src = '//code.jivosite.com/widget/Pun4lc0o4N';
    script.async = true;
    document.body.appendChild(script);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }
}

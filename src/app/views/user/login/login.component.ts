import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  darkTheme = localStorage.getItem('vien-themecolor')
  logoClr: boolean = false;
  buttonDisabled: boolean = false;
  buttonState = '';
  IMAGE_URL = environment.IMAGE_URL;
  showPassword: any;
  token;
  loginForm: UntypedFormGroup;

  constructor(private _authService: AuthService, public helper: Helper) { }

  ngOnInit(): void {
    if (this.darkTheme.startsWith('dark')) {
      this.logoClr = true;
    }
    if(this.helper.user_details){
      this.helper._route.navigateByUrl('/app/manage-vehicle');
    }
    this.tokenGenerator();

    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, Validators.required),
      password: new UntypedFormControl(null, Validators.required),      
    })
  }

  tokenGenerator() {
    length = 32;
    let token = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
      token += possible.charAt(Math.floor(Math.random() * possible.length));
    this.token = token;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    
    if (this.loginForm.valid) {
      this.buttonDisabled = true;
      this.buttonState = 'show-spinner';
      let json: any = { email: this.loginForm.value.email, password: this.loginForm.value.password, token: this.token,device_type:'web' }
      this._authService.login(json).then(islogin => {   
        if (islogin) {
          this.helper._route.navigateByUrl('/app/manage-vehicle').then(() => {
            setTimeout(() => {
              this.buttonDisabled = false;
              this.buttonState = '';
              this.loginForm.reset();
            }, 1000)
          })
        } else {
          this.buttonDisabled = false;
          this.buttonState = '';
        }
      });
    }
  }
}

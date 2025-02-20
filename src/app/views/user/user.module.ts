import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ImageCropperModule} from 'ngx-image-cropper';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [LoginComponent, UserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(), 
    ComponentsStateButtonModule,    
    DirectivesModule
  ]
})
export class UserModule { }

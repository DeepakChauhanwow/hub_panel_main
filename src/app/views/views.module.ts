import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PipeModule } from '../pipe/pipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  
    PipeModule,  
    ViewRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    HeadroomModule
  ],
  providers: [],
})
export class ViewsModule {}

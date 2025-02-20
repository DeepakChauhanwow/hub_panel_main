import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ProfileComponent } from './profile/profile.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgSelectModule } from '@ng-select/ng-select';
import {DriverComponent} from './driver/driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PipeModule} from '../../pipe/pipe.module';
import { FilterPipe } from 'src/app/pipe/search-pipe/filter.pipe'
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [FilterPipe, AppComponent, ProfileComponent, ManageVehicleComponent, DriverComponent],
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BsDatepickerModule,
    PagesContainersModule,
    SharedModule,
    LayoutContainersModule,
    ReactiveFormsModule,
    CollapseModule,
    NgSelectModule,
    PipeModule,
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgxPayPalModule
  ],
  exports: [],
  providers:[DatePipe]
})
export class AppModule { }


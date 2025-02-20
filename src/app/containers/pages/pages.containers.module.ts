import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NouisliderModule } from 'ng2-nouislider';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ImageCropperModule} from 'ngx-image-cropper';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { VehicleHistoryModalComponent } from './vehicle-history-modal/vehicle-history-modal.component';

@NgModule({
  declarations: [
    VehicleHistoryModalComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    DropzoneModule,
    NouisliderModule,
    TranslateModule,
    ReactiveFormsModule,
    ComponentsStateButtonModule,
    DirectivesModule
  ],
  exports: [
    VehicleHistoryModalComponent
  ]
})
export class PagesContainersModule { }

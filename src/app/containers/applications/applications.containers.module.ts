import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AddNewTodoModalComponent } from './add-new-todo-modal/add-new-todo-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddNewSurveyModalComponent } from './add-new-survey-modal/add-new-survey-modal.component';
import { LayoutContainersModule } from '../layout/layout.containers.module';
@NgModule({
  declarations: [
    AddNewTodoModalComponent,
    AddNewSurveyModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
  ],
  exports: [
    AddNewTodoModalComponent,
    AddNewSurveyModalComponent,
  ]
})
export class ApplicationsContainersModule { }

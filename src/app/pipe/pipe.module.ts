import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from './ordinal.pipe';
import {RoundPipe} from './round.pipe';


@NgModule({
  declarations: [OrdinalPipe, RoundPipe],
  imports: [CommonModule],
  exports: [OrdinalPipe, RoundPipe],
})
export class PipeModule {}
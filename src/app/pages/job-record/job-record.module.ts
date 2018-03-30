import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRecordRoutingModule } from './job-record-routing.module';
import { JobRecordComponent } from './job-record.component';

@NgModule({
  imports: [
    CommonModule,
    JobRecordRoutingModule
  ],
  declarations: [JobRecordComponent]
})
export class JobRecordModule { }

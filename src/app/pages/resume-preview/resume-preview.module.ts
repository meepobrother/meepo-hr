import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePreviewRoutingModule } from './resume-preview-routing.module';
import { ResumePreviewComponent } from './resume-preview.component';

@NgModule({
  imports: [
    CommonModule,
    ResumePreviewRoutingModule
  ],
  declarations: [ResumePreviewComponent]
})
export class ResumePreviewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedScheduleRoutingModule } from './recommended-schedule-routing.module';
import { RecommendedScheduleComponent } from './recommended-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    RecommendedScheduleRoutingModule
  ],
  declarations: [RecommendedScheduleComponent]
})
export class RecommendedScheduleModule { }

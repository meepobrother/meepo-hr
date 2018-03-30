import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedScheduleComponent } from './recommended-schedule.component';

const routes: Routes = [{
  path: '',
  component: RecommendedScheduleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendedScheduleRoutingModule { }

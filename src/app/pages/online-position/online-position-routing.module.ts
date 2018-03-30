import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinePositionComponent } from './online-position.component';

const routes: Routes = [{
  path: '',
  component: OnlinePositionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinePositionRoutingModule { }

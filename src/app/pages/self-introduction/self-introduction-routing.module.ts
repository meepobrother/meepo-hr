import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfIntroductionComponent } from './self-introduction.component';

const routes: Routes = [{
  path: '',
  component: SelfIntroductionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfIntroductionRoutingModule { }

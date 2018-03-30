import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from "./list-detail/list-detail.component";
const routes: Routes = [
  {
    path: "",
    component: ListDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDetailRoutingModule { }

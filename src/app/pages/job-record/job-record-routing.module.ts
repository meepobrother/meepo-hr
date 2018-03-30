import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobRecordComponent } from "./job-record.component";

const routes: Routes = [
  {
    path: "",
    component: JobRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRecordRoutingModule {}

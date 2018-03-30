import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailRoutingModule } from './list-detail-routing.module';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ListDetailRoutingModule
  ],
  declarations: [ListDetailComponent]
})
export class ListDetailModule { }

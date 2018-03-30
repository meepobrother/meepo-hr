import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlinePositionRoutingModule } from './online-position-routing.module';
import { OnlinePositionComponent } from './online-position.component';

@NgModule({
  imports: [
    CommonModule,
    OnlinePositionRoutingModule
  ],
  declarations: [OnlinePositionComponent]
})
export class OnlinePositionModule { }

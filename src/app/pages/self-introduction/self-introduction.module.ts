import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfIntroductionRoutingModule } from './self-introduction-routing.module';
import { SelfIntroductionComponent } from './self-introduction.component';

@NgModule({
  imports: [
    CommonModule,
    SelfIntroductionRoutingModule
  ],
  declarations: [SelfIntroductionComponent]
})
export class SelfIntroductionModule { }

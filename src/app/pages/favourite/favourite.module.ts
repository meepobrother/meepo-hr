import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';

@NgModule({
  imports: [
    CommonModule,
    FavouriteRoutingModule
  ],
  declarations: [FavouriteComponent]
})
export class FavouriteModule { }

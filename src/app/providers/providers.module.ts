import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WechatService } from './wechat.service';
import { UtilService } from './util.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WechatService,
    UtilService
  ]
})
export class ProvidersModule { }

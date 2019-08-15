import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapBusComponent } from './baitap-bus.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';



@NgModule({
  declarations: [BaitapBusComponent, ItemGheComponent, DanhSachGheComponent],
  exports: [BaitapBusComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapBusModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2WhatWeDoComponent } from './baitap2/baitap2-what-we-do/baitap2-what-we-do.component';
import { Baitap2ContactComponent } from './baitap2/baitap2-contact/baitap2-contact.component';
import { Baitap2ListCardComponent } from './baitap2/baitap2-list-card/baitap2-list-card.component';
import { CardComponent } from './baitap2/baitap2-list-card/card/card.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap3Module } from './baitap3/baitap3.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import {AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import { BaitapThemSanPhamModule } from './baitap-them-san-pham/baitap-them-san-pham.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemCardComponent } from './ng-content/item-card/item-card.component';
import { InteractionModule } from './interaction/interaction.module';
import { BaitapBusModule } from './baitap-bus/baitap-bus.module';


@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2CarouselComponent,
    Baitap2WhatWeDoComponent,
    Baitap2ContactComponent,
    Baitap2ListCardComponent,
    CardComponent,
    Baitap2FooterComponent,
    Baitap2HeaderComponent,
    NgContentComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule, Baitap3Module, DataBindingModule,StructuralDirectiveModule,AttributeDirectiveModule,BaitapThemSanPhamModule,InteractionModule,BaitapBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

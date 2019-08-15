import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HighLightDirective } from './high-light.directive';



@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HighLightDirective],
  exports: [AttributeDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }

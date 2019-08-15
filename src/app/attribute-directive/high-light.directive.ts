import { Directive, ElementRef ,Renderer2, HostListener, HostBinding} from '@angular/core';
@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef,private renderer2:Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "red"
    this.renderer2.setStyle(this.ele.nativeElement,"background-color","green");
  }
  @HostBinding('style.backgroundColor') bgColor:string = "blue"
  @HostListener('mouseenter') SuKienHover(){
    this.renderer2.setStyle(this.ele.nativeElement,"background-color","red");
  }
  @HostListener('mouseleave') SuKienLeave(){
    this.renderer2.setStyle(this.ele.nativeElement,"background-color","blue");
  }
}

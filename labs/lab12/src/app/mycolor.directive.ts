import { Directive, ElementRef, Renderer, HostListener, Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @Input() appMycolor: string;
  constructor(private element: ElementRef, private renderer: Renderer) {

  }
  @HostBinding('attr.value') color;

  @HostListener('click') clicked() {
  //  alert(this.color)
    this.appMycolor = this.nextColor(this.appMycolor);
    this.element.nativeElement.style.color = this.appMycolor;
    this.element.nativeElement.textContent = this.appMycolor;
    
  }
  nextColor(currentColor) {
    let colors = ['red', 'brown', 'pink', 'green', 'yellow']
    let i = colors.indexOf(currentColor)
    if (i !== colors.length - 1) {
    //  alert(`${this.color} + ${this.appMycolor}`)
      return colors[i + 1]
    }
    else
      return 'red'
  }
}

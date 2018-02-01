import{Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector : '[upperCase]'
})
export class UpperCase{

    constructor(element : ElementRef, renderer : Renderer){
        renderer.setElementStyle(element.nativeElement, 'text-transform', 'uppercase')
    }
}
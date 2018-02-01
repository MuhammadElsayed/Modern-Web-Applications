import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[myvisivility]'//,
    // inputs :['isvisibile']
})
export class Myvisivility {

    @Input() myvisivility: boolean;

    constructor(public element: ElementRef, public renderer: Renderer) { }
    ngOnInit() {

        if (this.myvisivility) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    }


}

import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-assign',
    template: `<h1  >hello from child</h1>
                <ul >
                <li *ngFor="let element of stringArray" upperCase >{{element}}</li>
                </ul>
                {{color}}
                <ng-content></ng-content>
    `


})
export class Assign {
    @Input() color: string = 'blue';


    public stringArray: string[];
    constructor() {
        this.stringArray = ['hello', 'world'];
    }
}
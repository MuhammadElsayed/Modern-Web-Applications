import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Counter App';
  public componentCounterValue:number;
  
    constructor() { 
      this.componentCounterValue=0;
    }

    setCounter(val) {
      if(!isNaN(val))
        this.componentCounterValue = val;
    }

    updateCounterFromChild(val) {
      this.componentCounterValue = val;
    }
}

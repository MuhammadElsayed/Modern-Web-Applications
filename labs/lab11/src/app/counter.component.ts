import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  inputs: ['counterValue'],
  styleUrls: ['./app.component.css'],
  template: `  
    <h1>Counter Component</h1>
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
    <br><br><button (click)="reset()">Reset</button>
  `
})
export class CounterComponent implements OnInit {
  title = 'Counter App';
  private counterValue;
  
  constructor() { 
    this.counterValue = 0;
  }

  @Output()
  counterChange = new EventEmitter();

  increment(){
    this.counterValue = this.counterValue+1;
    this.counterChange.emit(this.counterValue);
  }

  decrement(){
    this.counterValue = this.counterValue-1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  
  reset(){
    this.counterValue = 0;
  }

  ngOnInit() {
  }
}

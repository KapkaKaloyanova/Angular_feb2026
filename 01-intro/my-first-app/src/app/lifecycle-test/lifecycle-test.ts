import { Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  standalone: true,
  imports: [],
  template: `
    <button (click)="increment()">Increment</button>
    <p>Count: {{ count }}</p>
  `
})
export class LifecycleTest 
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy    {
  count = 100;

  constructor(){
    console.log('1\) Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2\) ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('3\) ngOnInit');
    
  }

  ngDoCheck(): void {
    console.log('4\) ngDoCheck');
    
  }

  ngAfterViewInit(): void {
    console.log('5\) ngAfterViewInit');
    
  }

  ngAfterViewChecked(): void {
    console.log('6\) ngAfterViewChecked');
    
  }

  increment(){
    this.count++;
    console.log('Button clicked');
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }
}

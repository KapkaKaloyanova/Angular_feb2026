import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-demo',
  imports: [],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css',
})
export class RxjsDemoComponent {
  results: string[] = [];

  clearResults(): void {
    this.results = [];
  }

  demo1(): void {
    this.clearResults();
    this.results.push('of() + subscribe() demonstration');

    of(1,2,3,4,)
  }

}
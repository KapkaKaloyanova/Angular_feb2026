import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { map, filter, tap} from 'rxjs/operators';

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

    of(1, 2, 3, 4,).subscribe(value => {
      this.results.push(`Received value: ${value}`);
    });
  }

  demo2(): void {
    this.clearResults();
    this.results.push('pipe() + filter() + map() demonstration * Add euro suffix to each odd number');
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      filter(value => value % 2 === 1), // Filter odd numbers
      map(value => value + ' euro') // Add 'euro' suffix to each odd number
    ).subscribe(value => {
      this.results.push(`Result: ${value}`);
    });
  }

  demo3(): void {
    this.clearResults();
    this.results.push('tap() demonstration * Convert lv to euro with tap() for logging');
    from([1, 2, 3, 4, 5]).pipe(
      tap(value => console.log(`Before map: ${value} lv`)),
      map(value => (value / 1.95583).toFixed(2) + ' euro'),
      tap(value => console.log(`After map: ${value} euro`))
    ).subscribe(value => {
      this.results.push(`Converted: ${value}`);
    });
  }

}
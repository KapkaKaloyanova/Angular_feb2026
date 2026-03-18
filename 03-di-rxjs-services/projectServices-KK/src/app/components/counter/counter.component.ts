import { Component, Inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // public counterService = Inject(CounterService);
  constructor(public counterService: CounterService) {
  }

}

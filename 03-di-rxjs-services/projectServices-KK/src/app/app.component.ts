import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { RxDemoComponent } from './components/rx-Demo/rx-Demo.component';
import { EventTimerComponent } from './components/event-timer/event-timer.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, RxDemoComponent, EventTimerComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
}

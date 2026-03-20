import { Component, signal } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { RxDemoComponent } from './components/rx-Demo/rx-Demo.component';
import { EventTimerComponent } from './components/event-timer/event-timer.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RxjsDemoComponent } from './components/rxjs-demo/rxjs-demo.component';
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from './components/posts/posts.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, RxDemoComponent, EventTimerComponent, MovieListComponent, RxjsDemoComponent, HomeComponent, PostsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  currentView = 'home';

  changeView(view: string){
    this.currentView = view;
  }
}

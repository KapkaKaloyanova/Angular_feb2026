import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AboutComponent, GamesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hello there';
  currentView = 'home';

  changeView(view: string){
    this.currentView = view;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  welcomeMessage = 'Welcome to our game store!';
  description = 'We are the best selling store';

  features = [
    'well established',
    'good sells',
    'big smile'
  ]
}

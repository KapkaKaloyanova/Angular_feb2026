import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  welcomeMessage = 'Welcome to the second lecture!';
  description = 'Here we will learn about services and RxJS';

    features = [
      // DI-RxJS-Observables-Services
    'Change Detection Strategy',
    'SOLID Principles',
    'Services',
    'RxJS and Observables',
    'Dependency Injection',
    'HttpClient'
  ]
}

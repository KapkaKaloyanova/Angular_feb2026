import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleTest } from "./lifecycle-test/lifecycle-test";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}

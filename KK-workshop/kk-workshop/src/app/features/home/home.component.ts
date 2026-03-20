import { Component } from '@angular/core';
import { RecentPostListComponent } from '../recent-post-list/recent-post-list.component';
import { ThemesListComponent } from '../themes-list/themes-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecentPostListComponent, ThemesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}

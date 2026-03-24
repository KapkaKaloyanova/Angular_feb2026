import { Component } from '@angular/core';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { ThemesListComponent } from './themes-list/themes-list.component';

@Component({
  selector: 'app-themes',
  imports: [RecentPostComponent, ThemesListComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css',
})
export class ThemesComponent {

}

import { Component } from '@angular/core';
import { ThemesList } from './themes-list/themes-list';
import { RecentPostList } from './recent-post-list/recent-post-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemesList,RecentPostList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

import { Component } from '@angular/core';
import { RecentPostList } from './recent-post-list/recent-post-list';
import { ThemesList } from './themes-list/themes-list';

@Component({
  selector: 'app-home',
  imports: [RecentPostList, ThemesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

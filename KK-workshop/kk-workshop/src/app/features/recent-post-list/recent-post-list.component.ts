import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Post } from '../../shared/interfaces/post';
import { PostItemComponent } from '../../shared/components/post-item/post-item.component';

@Component({
  selector: 'app-recent-post-list',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './recent-post-list.component.html',
  styleUrl: './recent-post-list.component.css',
})
export class RecentPostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item-component/post-item-component';

@Component({
  selector: 'app-recent-post-list',
  imports: [PostItemComponent],
  providers: [ApiService],
  templateUrl: './recent-post-list.html',
  styleUrl: './recent-post-list.css',
})
export class RecentPostList implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts
    });
  }
}

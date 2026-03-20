import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item-component/post-item-component';

@Component({
  selector: 'app-recent-post-list',
  standalone: true,
  imports: [CommonModule, PostItemComponent],
  templateUrl: './recent-post-list.html',
  styleUrl: './recent-post-list.css',
})
export class RecentPostList implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

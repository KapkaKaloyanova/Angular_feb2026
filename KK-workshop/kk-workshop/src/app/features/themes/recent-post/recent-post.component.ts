import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item/post-item.component';

@Component({
  selector: 'app-recent-post',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css',
})
export class RecentPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);

  posts: Post[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getAllPosts().subscribe({
      next: (data) => {
        console.log('Posts loaded successfully:', data);
        this.posts = data.slice(0, 6); // Display only the first 6 posts for brevity
      },
      error: (error) => {
        console.error('Error loading posts:', error);
      },

    });

  }

  deletePost(id: number): void {
    this.postsService.deletePost(id).subscribe({
      next: () => {
        console.log('Post deleted successfully');
        this.posts = this.posts.filter(post => post.id !== id); // Remove the deleted post from the local array
      },
      error: (error) => {
        console.error('Error deleting post:', error);
      }
    });
  }

}
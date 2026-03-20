import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(): Observable<Post[]> {
    console.log('Fetching all posts from API...');

    return this.http.get<Post[]>(this.apiUrl);
  }

  deletePost(id: number): Observable<void> {
    console.log(`Deleting post with ID: ${id}...`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPostById(id: number): Observable<Post> {
    console.log(`Fetching post with ID: ${id}...`);
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  } 

  createPost(post: Omit<Post, 'id'>): Observable<Post> {
    console.log('Creating a new post...', post);
    return this.http.post<Post>(this.apiUrl, post);
  } 

}
import { Component, inject, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { Theme } from '../../../shared/interfaces/theme';
import { Post } from '../../../shared/interfaces/post';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-theme-content',
  imports: [],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.css',
})
export class ThemeContentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  theme: Theme | null = null;
  posts: Post[] = [];

  commentText = '';
  themeId = '';

  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['themeId'];
    this.loadThemeData();
  }

  loadThemeData(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.theme = themes.find((t) => t._id === this.themeId) || null;
    })

    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts.filter((p: any) => p.themeId?._id === this.themeId);
    })
  }
}

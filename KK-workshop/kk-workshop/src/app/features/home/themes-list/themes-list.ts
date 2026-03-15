import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Theme } from '../../../shared/interfaces/theme';
import { ThemeItemComponent } from '../../../shared/components/theme-item-component/theme-item-component';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [CommonModule, ThemeItemComponent],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList implements OnInit   {
  themes: Theme[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes.sort((a, b) => b.subscribers.length - a.subscribers.length);
      this.cdr.detectChanges();
    });
  }

}

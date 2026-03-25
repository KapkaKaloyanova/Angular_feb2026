import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-new-theme',
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css',
})
export class NewThemeComponent {
  private router = inject(Router);

  themeName = '';
  postText = '';
  
  onSubmit():void {
    console.log('Creating theme', this.themeName, this.postText);
    this.router.navigate(['/themes']);
  }

  onCancel():void {
    this.router.navigate(['/home']);
  } 
}

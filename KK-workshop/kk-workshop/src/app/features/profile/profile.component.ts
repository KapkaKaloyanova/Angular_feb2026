import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private authService = inject(AuthService);

   user = this.authService.currentUser


}

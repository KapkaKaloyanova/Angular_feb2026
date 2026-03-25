import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ThemesComponent } from './features/themes/themes.component';
import { NewThemeComponent } from './features/themes/new-theme/new-theme.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ThemeContentComponent } from './features/themes/theme-content/theme-content.component';
import { authGuard } from './core/guards/auth-guard';
import { ProfileComponent } from './features/profile/profile.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProfileEditComponent } from './features/profile-edit/profile-edit.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

    { path: 'themes', component: ThemesComponent },
    { path: 'themes/:themeId', component: ThemeContentComponent },
    { path: 'add-theme', component: NewThemeComponent, canActivate: [authGuard] },

    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    // {path: 'profile/edit', component: ProfileEditComponent, canActivate: [authGuard]},  


    { path: '**', component: NotFoundComponent },

];

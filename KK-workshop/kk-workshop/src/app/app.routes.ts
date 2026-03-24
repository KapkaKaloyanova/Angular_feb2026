import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ThemesComponent } from './features/themes/themes.component';
import { NewThemeComponent } from './features/themes/new-theme/new-theme.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ThemeContentComponent } from './features/themes/theme-content/theme-content.component';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    
    { path: 'themes', component: ThemesComponent },
    { path: 'themes/new', component: NewThemeComponent },

    {path: 'themes/:themeId', component: ThemeContentComponent, canActivate: [authGuard]},  
    
    { path: '**', redirectTo: 'home' },

];

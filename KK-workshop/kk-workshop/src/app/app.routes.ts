import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ThemesComponent } from './features/themes/themes.component';
import { NewThemeComponent } from './features/themes/new-theme/new-theme.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'themes', component: ThemesComponent },
    { path: 'themes/new', component: NewThemeComponent },

];

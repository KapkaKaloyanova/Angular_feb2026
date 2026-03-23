import { Routes } from '@angular/router';
import { MissionsComponent } from './features/missions/missions.component';
import { CountdownComponent } from './features/countdown/countdown.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'missions', pathMatch: 'full' },
    { path: 'missions', component: MissionsComponent },
    { path: 'countdown', component: CountdownComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent}
];
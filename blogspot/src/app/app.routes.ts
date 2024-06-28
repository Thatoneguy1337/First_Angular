import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, canActivate: [authGuard] },
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent }
];

import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '/login', component: LoginComponent
  },
  {
    path: '/cadastro', component: RegisterComponent
  }
];

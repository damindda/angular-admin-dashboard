import type { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users';
import { DashboardPage } from './pages/dashboard';
import { PageNotFound } from './pages/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard Page',
    component: DashboardPage,
    children: [
      {
        path: '',
        component: Home,
        title: 'Main Dashboard',
      },
      {
        path: 'users',
        title: 'User Page',
        component: Users,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFound,
    title: 'Page Not Found',
  },
];

import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: 'home', loadComponent: () => import('./home/home.component') },
      { path: 'autorizationrol', loadComponent: () => import('./core/components/authorization/authorization.component') },
      { path: 'dashboard', loadComponent: () => import('./core/components/dashboard-main/dashboard-main.component') },
      { path: 'employes', loadChildren: () => import('./core/components/pages/employes/employes.module').then(m => m.EmployesModule) },
    ]
  },
  { path: 'login', loadComponent: () => import('./core/components/auth/login/login.component') },
  { path: 'restorepassword', loadComponent: () => import('./core/components/auth/password-recovery/password-recovery.component') },
  { path: '**', loadComponent: () => import('./core/components/pages/page-not-found/page-not-found.component') },
];

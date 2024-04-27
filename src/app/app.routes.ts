import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./core/components/auth/login/login.component') },
  { path: 'autorizationrol', loadComponent: () => import('./core/components/authorization/authorization.component') },
  { path: 'dashboard', loadComponent: () => import('./core/components/dashboard-main/dashboard-main.component') },
  { path: 'employes', loadChildren: () => import('./core/components/pages/employes/employes.module').then(m => m.EmployesModule) },
  { path: 'restorepassword', loadComponent: () => import('./core/components/auth/password-recovery/password-recovery.component') },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  { path: '**', loadComponent: () => import('./core/components/auth/login/login.component') },
];

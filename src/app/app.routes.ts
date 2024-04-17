import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./core/components/auth/login/login.component') },
  { path: 'employes', loadChildren: () => import('./core/components/pages/employes/employes.module').then(m => m.EmployesModule) },
  { path: 'restorepassword', loadComponent: () => import('./core/components/auth/password-recovery/password-recovery.component') },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  { path: '**', loadComponent: () => import('./core/components/auth/login/login.component') },
];

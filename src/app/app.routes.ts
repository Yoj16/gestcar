import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { 
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'vehicles',
    loadComponent: () => import('./components/vehicle-list/vehicle-list.component').then(m => m.VehicleListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicles/add',
    loadComponent: () => import('./components/vehicle-form/vehicle-form.component').then(m => m.VehicleFormComponent),
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'vehicles/edit/:id',
    loadComponent: () => import('./components/vehicle-form/vehicle-form.component').then(m => m.VehicleFormComponent),
    canActivate: [AuthGuard, AdminGuard]
  }
];
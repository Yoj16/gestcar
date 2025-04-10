import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="text-white font-bold text-xl" href="#">GestCar</a>
            <div class="ml-10">
              <a class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                 routerLink="/vehicles" 
                 routerLinkActive="bg-gray-900">
                Consultation
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <ng-container *ngIf="!authService.currentUserValue">
              <a class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                 routerLink="/login">
                Connexion
              </a>
            </ng-container>
            <ng-container *ngIf="authService.currentUserValue">
              <button (click)="logout()" 
                      class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Déconnexion
              </button>
            </ng-container>
          </div>
        </div>
      </div>
    </nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
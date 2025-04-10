import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Liste des véhicules</h2>
      <button *ngIf="isAdmin" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              routerLink="/vehicles/add">
        Ajouter un véhicule
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marque</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modèle</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Couleur</th>
            <th *ngIf="isAdmin" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr *ngFor="let vehicle of vehicles">
            <td class="px-6 py-4 whitespace-nowrap">{{ vehicle.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ vehicle.brand }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ vehicle.model }}</td>
            <td class="px-6 py-4 whitespace-nowrap"><input type="color" disabled value="{{ vehicle.color }}"></td>
            <td *ngIf="isAdmin" class="px-6 py-4 whitespace-nowrap">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                      [routerLink]="['/vehicles/edit', vehicle.id]">
                Modifier
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      (click)="deleteVehicle(vehicle.id!)">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  isAdmin: boolean = false;

  constructor(
    private vehicleService: VehicleService,
    private authService: AuthService
  ) {
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  deleteVehicle(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      this.vehicleService.deleteVehicle(id).subscribe(() => {
        this.loadVehicles();
      });
    }
  }
}
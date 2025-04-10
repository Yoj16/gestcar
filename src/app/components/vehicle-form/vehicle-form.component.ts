import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold mb-6">{{ isEditMode ? 'Modifier' : 'Ajouter' }} un véhicule</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="brand">
            Marque
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            type="text"
            [(ngModel)]="vehicle.brand"
            name="brand"
            required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="model">
            Modèle
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="model"
            type="text"
            [(ngModel)]="vehicle.model"
            name="model"
            required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="color">
            Couleur
          </label>
          <input
            class=""
            id="color"
            type="color"
            [(ngModel)]="vehicle.color"
            name="color"
            required>
        </div>
        <div class="flex gap-2">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {{ isEditMode ? 'Modifier' : 'Ajouter' }}
          </button>
          <button
            type="button"
            (click)="cancel()"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Annuler
          </button>
        </div>
      </form>
    </div>
  `
})
export class VehicleFormComponent implements OnInit {
  vehicle: Vehicle = {
    brand: '',
    model: '',
    color: ''
  };
  isEditMode = false;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.vehicleService.getVehicle(id).subscribe(vehicle => {
        this.vehicle = vehicle;
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.vehicleService.updateVehicle(this.vehicle).subscribe(() => {
        this.router.navigate(['/vehicles']);
      });
    } else {
      this.vehicleService.addVehicle(this.vehicle).subscribe(() => {
        this.router.navigate(['/vehicles']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/vehicles']);
  }
}
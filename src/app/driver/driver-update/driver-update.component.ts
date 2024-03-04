import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from '../../driver.model';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent {
  driverId: any;
  showForm: boolean = false;
  driver: Driver = new Driver();

  constructor(private driverService: DriverService, private router: Router) {}

  onSubmitDriverId(form: NgForm) {
    if (!form.valid) {
      console.error('Invalid form.');
      return;
    }

    this.driverId = form.value.driverId;

    this.driverService.getDriverById(this.driverId).subscribe({
      next: (driver: Driver) => {
        if (driver) {
          this.driver = driver;
          this.showForm = true;
        } else {
          console.error(`Driver with ID ${this.driverId} not found.`);
        }
      },
      error: (error: any) => {
        console.error('Error fetching driver details:', error);
      }
    });
  }

  onSubmitUpdate(form: NgForm) {
    if (!form.valid) {
      console.error('Invalid form.');
      return;
    }

    const updatedDriver: Driver = {
      driverId: this.driverId,
      licenceNo: form.value.licenceNo,
      rating: form.value.rating,
      currLocation: form.value.currLocation,
      currDriverStatus: form.value.currDriverStatus
    };

    this.driverService.updateDriver(updatedDriver).subscribe({
      next: (updatedDriver: Driver) => {
        console.log('Driver updated successfully:', updatedDriver);
        this.router.navigate(['/view-driver', this.driverId]);
      },
      error: (error: any) => {
        console.error('Error updating driver:', error);
      }
    });
  }
}

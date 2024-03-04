import { Component } from '@angular/core';
import { DriverService } from '../../driver.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-driver-delete',
  templateUrl: './driver-delete.component.html',
  styleUrls: ['./driver-delete.component.css']
})
export class DriverDeleteComponent {
  driverIdToDelete: any;

  constructor(private driverService: DriverService, private apiService : LoginService) { 
  }

  onDelete(): void {
    if (!this.driverIdToDelete) {
      console.error('Driver ID is required.');
      return;
    }

    this.driverService.deleteDriver(this.driverIdToDelete).subscribe({
      next: (value: any) => {
        console.log('Driver deleted successfully:', value);
        // Optionally, perform any other action after successful deletion
      },
      error: (error: any) => {
        console.error('Error deleting driver:', error);
        // Handle error, show error message, etc.
      }
    });
  }
}

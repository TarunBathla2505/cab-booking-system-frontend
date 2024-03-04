import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from '../../driver.model';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {
  driverIdForm: FormGroup;
  driver: Driver = new Driver();
  showDriverDetails: boolean = false;

  constructor(private fb: FormBuilder, private driverService: DriverService) {
    this.driverIdForm = this.fb.group({
      driverId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmitDriverId(): void {
    const driverId = this.driverIdForm.get('driverId')?.value;
    if (driverId) {
      this.driverService.getDriverById(driverId).subscribe({
        next: (driver: Driver) => {
          this.driver = driver;
          this.showDriverDetails = true;
        },
        error: (error: any) => {
          console.error('Error fetching driver details:', error);
        }
      });
    }
  }
}

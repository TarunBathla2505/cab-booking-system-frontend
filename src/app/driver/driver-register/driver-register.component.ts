import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from '../../driver.model';
import { DriverService } from '../../driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent {
  driverForm: FormGroup;
  submitted = false;

  constructor(
    private driverService: DriverService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.driverForm = this.formBuilder.group({
      driverId: [0, Validators.required],
      licenceNo: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      currLocation: ['', Validators.required],
      currDriverStatus: ['', Validators.required]
    });
  }

  get f() { return this.driverForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    if (this.driverForm.invalid) {
      return;
    }
  
    const driver: Driver = {
      driverId: this.driverForm.get('driverId')?.value as number,
      licenceNo: this.driverForm.get('licenceNo')?.value as string,
      rating: this.driverForm.get('rating')?.value as number,
      currLocation: this.driverForm.get('currLocation')?.value as string,
      currDriverStatus: this.driverForm.get('currDriverStatus')?.value as string,
    };
  
    console.log('Submitting form:', driver);

    this.driverService.registerDriver(driver).subscribe({
      next: (value: Driver) => {
        this.goToDriverList();
        console.log('Driver registered successfully:', value);
      },
      error: (error: any) => {
        console.error('Error registering driver:', error);
      }
    });
  }

  goToDriverList() {
    this.router.navigate(['/list']);
  }
}

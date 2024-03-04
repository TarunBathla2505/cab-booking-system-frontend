import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cab } from '../../cab.model';
import { CabService } from '../../cab.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabregister',
  templateUrl: './cabregister.component.html',
  styleUrls: ['./cabregister.component.css']
})
export class CabregisterComponent {
  cab: Cab = new Cab();
  submitted = false;

  constructor(private cabService: CabService, private fb: FormBuilder, private active: ActivatedRoute, private route: Router) { }

  cabForm = this.fb.group({
    cabId: [0, Validators.required],
    carType: ['', Validators.required],
    carName: ['', Validators.required],
    carNumber: ['', Validators.required],
    perKmRate: ['', [Validators.required, Validators.min(0)]],
    currLocation: ['', Validators.required],
    cabCurrStatus: ['', Validators.required]
  });

  get f() {
    return this.cabForm.controls;
  }

  populateCabFromForm(): void {
    this.cab.cabId = this.cabForm.get('cabId')?.value; 
    this.cab.carType = this.cabForm.get('carType')?.value;
    this.cab.carName = this.cabForm.get('carName')?.value;
    this.cab.carNumber = this.cabForm.get('carNumber')?.value;
    this.cab.perKmRate = this.cabForm.get('perKmRate')?.value;
    this.cab.currLocation = this.cabForm.get('currLocation')?.value;
    this.cab.cabCurrStatus = this.cabForm.get('cabCurrStatus')?.value;
  }

  onSubmit() {
    this.submitted = true;
    if (this.cabForm.invalid) {
      return;
    }

    this.populateCabFromForm(); // Populate cab object with form values

    console.log('Submitting form:', this.cab);
    
    this.cabService.registerCab(this.cab).subscribe({
      next: (value: Cab) => {
        this.goToCabList();
        console.log('Cab registered successfully:', value);
      },
      error: (error: any) => {
        console.error('Error registering cab:', error);
      }
    });
  }

  goToCabList() {
    this.route.navigate(['/list']);
  }
}

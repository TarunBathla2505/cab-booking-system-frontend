import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cab } from '../../cab.model';
import { CabService } from '../../cab.service';

@Component({
  selector: 'app-cab-update',
  templateUrl: './cabupdate.component.html',
  styleUrls: ['./cabupdate.component.css']
})
export class CabupdateComponent implements OnInit {
  cabId: number | undefined;
  cab: Cab = new Cab();
  showForm: boolean = false;
  updateForm: FormGroup;
  uuid: any;
  route: any;

  constructor(private cabService: CabService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      carType: ['', Validators.required],
      carName: ['', Validators.required],
      carNumber: ['', Validators.required],
      perKmRate: ['', [Validators.required, Validators.min(0)]],
      currLocation: ['', Validators.required],
      cabCurrStatus: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  getCabDetails(): void {
    if (this.cabId) {
      this.cabService.getCabById(this.cabId).subscribe({
        next: (cab: Cab) => {
          this.cab = cab;
          this.showForm = true;
          this.populateForm();
        },
        error: (error: any) => {
          console.error('Error fetching cab details:', error);
          this.showForm = false;
        }
      });
    }
  }

  populateForm(): void {
    this.updateForm.patchValue({
      carType: this.cab.carType,
      carName: this.cab.carName,
      carNumber: this.cab.carNumber,
      perKmRate: this.cab.perKmRate,
      currLocation: this.cab.currLocation,
      cabCurrStatus: this.cab.cabCurrStatus
    });
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.cab.carType = this.updateForm.value.carType;
    this.cab.carName = this.updateForm.value.carName;
    this.cab.carNumber = this.updateForm.value.carNumber;
    this.cab.perKmRate = this.updateForm.value.perKmRate;
    this.cab.currLocation = this.updateForm.value.currLocation;
    this.cab.cabCurrStatus = this.updateForm.value.cabCurrStatus;

    this.cabService.updateCab(this.cab).subscribe({
      next: (value: Cab) => {
       
        console.log('Cab updated successfully:', value);
        
      },
      error: (error: any) => {
        console.error('Error updating cab:', error);
      }
    });
  }

}

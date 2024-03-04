import { Component, OnInit } from '@angular/core';
import { Cab } from '../../cab.model';
import { CabService } from '../../cab.service';

@Component({
  selector: 'app-view-cabs',
  templateUrl: './viewcabs.component.html',
  styleUrls: ['./viewcabs.component.css']
})
export class ViewCabsComponent implements OnInit {
  cabsOfType: Cab[] = [];


  selectedOption: any;

  constructor(private cabService: CabService) { }

  ngOnInit(): void {
    this.getCabsOfType();
  }

  getCabsOfType(): void {
    this.cabService.getCabsOfType(this.selectedOption).subscribe({
      next: (cabs: Cab[]) => {
        this.cabsOfType = cabs;
        console.log('Cabs of type', this.selectedOption, ':', cabs);
      },
      error: (error: any) => {
        console.error('Error fetching cabs:', error);
        // Handle error, e.g., display error message to user
      }
    });
  }
}

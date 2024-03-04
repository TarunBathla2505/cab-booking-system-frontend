import { Component } from '@angular/core';
import { Cab } from '../../cab.model';
import { CabService } from '../../cab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabdelete',
  templateUrl: './cabdelete.component.html',
  styleUrls: ['./cabdelete.component.css']
})
export class CabdeleteComponent {
  cabIdToDelete: any;

  constructor(private cabService: CabService, private router: Router) { }

  onDelete(): void {
    if (!this.cabIdToDelete) {
      console.error('Cab ID is required.');
      return;
    }

    this.cabService.deleteCab(this.cabIdToDelete).subscribe({
      next: (value: Cab) => {
        console.log('Cab deleted successfully:', value);
        
      },
      error: (error: any) => {
        console.error('Error deleting cab:', error);
       
      }
    });
  }
}

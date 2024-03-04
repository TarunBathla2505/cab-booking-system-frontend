import { Component } from '@angular/core';
import { CabService } from '../cab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private cabService:CabService,private router:Router){}
  onSubmit(arg0: any) {   
  console.log(arg0);
    arg0.fromDateTime = this.formatDateTime(arg0.fromDateTime);
    arg0.toDateTime = this.formatDateTime(arg0.toDateTime);
  this.cabService.searchCab(arg0.pickupLocation,arg0).subscribe({});
this.router.navigate(['/show-cabs']);
  }

  private formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    // Format the date-time string in the format expected by your backend
    return `${this.padZero(date.getDate())}-${this.padZero(date.getMonth() + 1)}-${date.getFullYear()} ${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}`;
  }

  // Function to pad single digit numbers with leading zero
  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}

import { Component } from '@angular/core';
import { CabService } from '../cab.service';

@Component({
  selector: 'app-show-cabs',
  templateUrl: './show-cabs.component.html',
  styleUrl: './show-cabs.component.css'
})
export class ShowCabsComponent {

cabDetails:any;
constructor(private cabService:CabService){
  
}
ngOnInit(){
  this.cabService.sendCabDetails().subscribe((data:any)=>{this.cabDetails = data;
  console.log(this.cabDetails)});
}
bookCab(index :number) {
  console.log(index);
  this.cabService.bookCab(this.cabDetails[index]).subscribe();
  alert("cab booked");
}
}

import { Component } from '@angular/core';
import { CabService } from '../cab.service';

@Component({
  selector: 'app-search-cab',
  templateUrl: './search-cab.component.html',
  styleUrl: './search-cab.component.css'
})
export class SearchCabComponent {
  selectedOption: any = 'Sedan';
  cabs:any;
  constructor(private cabService:CabService){}
  onSubmit() {
    this.cabService.getCabsOfType(this.selectedOption).subscribe(data=>this.cabs = data);
  }

}

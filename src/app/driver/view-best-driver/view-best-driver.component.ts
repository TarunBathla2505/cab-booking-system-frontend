import { Component } from '@angular/core';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-view-best-driver',
  templateUrl: './view-best-driver.component.html',
  styleUrl: './view-best-driver.component.css'
})
export class ViewBestDriverComponent {
  drivers: any;
  constructor(private driverService:DriverService){}
  ngOnInit(){
    this.driverService.viewBestDriver().subscribe((data:any)=>this.drivers=data);
  }

}

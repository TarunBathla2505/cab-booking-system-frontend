import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './driver.model'; // Assuming you have a Driver model

import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:8080/driver'; // Base URL of your backend API

  constructor(private http: HttpClient,private session:SessionService) { }

  registerDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.baseUrl}/register`, driver);
  }

  updateDriver(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/update`, driver);
  }  

  deleteDriver(driverId: number): Observable<Driver> {
    return this.http.delete<Driver>(`${this.baseUrl}/delete/${driverId}`);
  }

  viewBestDriver(): any {
    return this.http.get<any>(`${this.baseUrl}/viewBestDriver?uuid=${this.session.get('uuid').uuid}`);
  }

  viewDriver(driverId: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/viewDriver/${driverId}`);
  }

  getDriverById(driverId: number): Observable<Driver> {
    const url = `${this.baseUrl}/viewDriver`;
    return this.http.get<Driver>(url, { params: { driverId: driverId.toString() } });
  }
}

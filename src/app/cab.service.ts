import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cab } from './cab.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private baseUrl = 'http://localhost:8080/cab';

  constructor(private http: HttpClient,private session:SessionService) {

  }

  getCabById(id: number): Observable<Cab> {
    const url = `${this.baseUrl}/get/${id}`;
    return this.http.get<Cab>(url);
  }

  registerCab(cab: Cab): Observable<Cab> {
    return this.http.post<Cab>(`${this.baseUrl}/register`, cab);
  }

  getAllCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(`${this.baseUrl}/list`);
  }

  updateCab(cab: Cab): Observable<Cab> {
    const url = `${this.baseUrl}/update/`;
    return this.http.put<Cab>(url, cab);
  }

  deleteCab(cabId: number): Observable<Cab> {
    return this.http.delete<Cab>(`${this.baseUrl}/delete/${cabId}`);
  }


  private getCabsOfTypeUrl = "http://localhost:8080/cab/viewCabsOfType/";
  getCabsOfType(carType: string): Observable<Cab[]> {
    console.log(this.session.get('uuid').uuid);
    console.log(`${this.getCabsOfTypeUrl+carType}?uuid=${this.session.get('uuid').uuid}`);
    const url = `${this.getCabsOfTypeUrl+carType}?uuid=${this.session.get('uuid').uuid}`;
    return this.http.get<any>(url);
  }
  cabDetails:any;
  private searchCabUrl = "http://localhost:8080/tripBooking/searchCab?pickUpLocation=";
  searchCab(pickupLocation:any,data:any){
    this.session.set('bookingData',data);
    this.cabDetails =  this.http.get<any>(`${this.searchCabUrl+pickupLocation}&uuid=${this.session.get('uuid').uuid}`);
    return this.cabDetails;
  }
  private bookCabUrl = "http://localhost:8080/tripBooking/BookRequest?cabId=";
  bookCab(cab:any){
    console.log(`${this.bookCabUrl+cab.cabId}&uuid=${this.session.get('uuid').uuid}`);
    console.log(cab);
    return this.http.post<any>(`${this.bookCabUrl+cab.cabId}&uuid=${this.session.get('uuid').uuid}`,this.session.get('bookingData'));
  }
  sendCabDetails(){
    return this.cabDetails;
  }
}

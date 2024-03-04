import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,private session:SessionService) { }
  private loginUrl = "http://localhost:8080/Userlogin/Login";
  login(formData:any){
    return this.http.post<any>(`${this.loginUrl}`, formData).subscribe(response => {
      this.session.set('uuid',response);
    });
  }
  private logoutUrl = "http://localhost:8080/Userlogin/logout?uuid=";
  logout(){
    console.log(`${this.logoutUrl+this.session.get('uuid')}`);
    this.http.get<any>(`${this.logoutUrl+this.session.get('uuid').uuid}`).subscribe();
  }
}

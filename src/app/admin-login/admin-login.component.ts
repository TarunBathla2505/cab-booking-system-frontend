import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  @ViewChild('myForm') myForm: NgForm | any;
  formData: any = {
    password: '',
    email: '',
    role: '' 
  };
  constructor(private apiService:LoginService, private router :Router){}

  onSubmit() {
    if (this.myForm.valid) {
      this.formData.password = this.myForm.value.password;
      this.formData.email = this.myForm.value.email;
      this.formData.role = 'Admin';
      this.apiService.login(this.formData);
      this.router.navigate(['/admin']);
    } 
    else {
      console.log("Form is invalid!");

    }
  }

}

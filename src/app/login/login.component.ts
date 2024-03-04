import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
      this.formData.role = 'Customer';
      this.apiService.login(this.formData);
      this.router.navigate(['/user']);
      

    } else {
      console.log("Form is invalid!");

    }
  }

}

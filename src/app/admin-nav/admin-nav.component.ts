import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  constructor(private loginService:LoginService){}
  onClick() {
    this.loginService.logout();
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) { }
  goToHomePage(): void {
    // Navigate to the home page
    this.router.navigate(['/nav-bar']); // Assuming 'home' is the path to your home page component
  }
}

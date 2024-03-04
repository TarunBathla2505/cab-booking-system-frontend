import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabdeleteComponent } from './cab/cabdelete/cabdelete.component';
import { CabregisterComponent } from './cab/cabregister/cabregister.component';
import { CabupdateComponent } from './cab/cabupdate/cabupdate.component';
import { ViewCabsComponent } from './cab/viewcabs/viewcabs.component';
import { DriverRegisterComponent } from './driver/driver-register/driver-register.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverDeleteComponent } from './driver/driver-delete/driver-delete.component';
import { ViewBestDriverComponent } from './driver/view-best-driver/view-best-driver.component';
import { ViewDriverComponent } from './driver/view-driver/view-driver.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserComponent } from './user/user.component';
import { ShowCabsComponent } from './show-cabs/show-cabs.component';
import { AdminComponent } from './admin/admin.component';
import { SearchCabComponent } from './search-cab/search-cab.component';

const routes: Routes = [
  // { path: '', redirectTo: '/register', pathMatch: 'full' }, // Redirect to /register by default
  {path: '',component: LandingPageComponent},
  {path:'user',component: UserComponent},
  {path:'seacrh',component: SearchCabComponent},
  {path:'view-Driver',component: ViewBestDriverComponent},
  {path:'admin',component:AdminComponent},
  {path:'nav-bar',component: NavBarComponent},
  { path: 'cab/register', component: CabregisterComponent },
  { path: 'cab/view-cabs', component: ViewCabsComponent },
  { path: 'cab/update', component: CabupdateComponent },
  { path: 'cab/delete', component: CabdeleteComponent },
  { path: 'driver/register', component: DriverRegisterComponent },
  { path: 'driver/update', component: DriverUpdateComponent },
  { path: 'driver/delete', component: DriverDeleteComponent },
  { path: 'view-best-driver', component: ViewBestDriverComponent },
  { path: 'view-driver', component: ViewDriverComponent },
  { path:'login', component:LoginComponent},
  { path:'admin-login', component:AdminLoginComponent},
  { path:'show-cabs', component:ShowCabsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabregisterComponent } from './cab/cabregister/cabregister.component';
import { HttpClientModule } from '@angular/common/http';
import { CabdeleteComponent } from './cab/cabdelete/cabdelete.component';
import { CabupdateComponent } from './cab/cabupdate/cabupdate.component';
import { ViewCabsComponent } from './cab/viewcabs/viewcabs.component';
import { DriverRegisterComponent } from './driver/driver-register/driver-register.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverDeleteComponent } from './driver/driver-delete/driver-delete.component';
import { ViewBestDriverComponent } from './driver/view-best-driver/view-best-driver.component';
import { ViewDriverComponent } from './driver/view-driver/view-driver.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserComponent } from './user/user.component';

import { ShowCabsComponent } from './show-cabs/show-cabs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { SearchCabComponent } from './search-cab/search-cab.component';

@NgModule({
  declarations: [
    AppComponent,
    CabregisterComponent,
    CabdeleteComponent,
    CabupdateComponent,
    ViewCabsComponent,
    DriverRegisterComponent,
    DriverUpdateComponent,
    DriverDeleteComponent,
    ViewBestDriverComponent,
    ViewDriverComponent,
    LandingPageComponent,
    NavBarComponent,
    LoginComponent,
    AdminLoginComponent,
    UserComponent,
    ShowCabsComponent,
    AdminComponent,
    AdminNavComponent,
    SearchCabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

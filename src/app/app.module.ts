import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/components';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CouponsTableComponent } from './components/coupons-table/coupons-table.component';
import { CompaniesTableComponent } from './components/companies-table/companies-table.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { Admin2Component } from './components/admin2/admin2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CouponComponent } from './components/coupon/coupon.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    MainComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    AppComponent,
    PageNotFoundComponent,
    Admin2Component,
    CouponsTableComponent,
    CompaniesTableComponent,
    CustomersTableComponent,
    CouponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AppModule {}

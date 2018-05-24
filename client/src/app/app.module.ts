import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms' ;

import {HttpModule} from '@angular/http';
import {PanelMenuModule} from 'primeng/panelmenu';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {routes} from './app.router';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import { AuthService } from './services/auth.service';

import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import { RegisterProductComponent } from './register-product/register-product.component';
import { RetailsaleComponent } from './retailsale/retailsale.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { InvoiceWholesaleComponent } from './invoice-wholesale/invoice-wholesale.component';

@NgModule({
  declarations: [
    
    AppComponent,
    MainComponent,
    DashboardComponent,
    CustomerRegisterComponent,
    RegisterDoctorComponent,
    RegisterSupplierComponent,
    RegisterAgentComponent,
    RegisterEmployeeComponent,
    RegisterProductComponent,
    RetailsaleComponent,
    WholesaleComponent,
    InvoiceWholesaleComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ButtonModule,
    PanelMenuModule,
    MenuModule,
    BrowserAnimationsModule,
    CheckboxModule,
    RadioButtonModule,
    routes,
    PanelModule,
    InputTextModule,
    CalendarModule,
    PasswordModule,
    DropdownModule,
    CardModule,
    ChartModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

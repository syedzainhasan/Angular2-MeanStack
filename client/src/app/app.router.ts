import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import{AppComponent} from './app.component';
import{MainComponent} from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';




export const router :Routes =[

{  path:'',redirectTo:'dashboard',pathMatch:'full' },
{path:'dashboard', component: DashboardComponent},
{ path:'register-doctor', component: RegisterDoctorComponent  },
{ path:'customer-register', component: CustomerRegisterComponent },
{ path:'register-supplier', component: RegisterSupplierComponent },
{ path:'register-agent', component: RegisterAgentComponent },
{ path:'register-employee', component: RegisterEmployeeComponent }
];
export const routes : ModuleWithProviders = RouterModule.forRoot(router);
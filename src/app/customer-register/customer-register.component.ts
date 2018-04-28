import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Customer_register } from './customer-register.interface';
import {HTTPTestService} from './http_test'
@Component({ 
  selector: 'app-customer-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
  providers: [HTTPTestService]
})

export class CustomerRegisterComponent implements OnInit {

  
getDATA:string;
  customer_register:FormGroup;

  constructor(private formbuilder : FormBuilder , private httpService:HTTPTestService){}

  ngOnInit() {
   this.customer_register= this.formbuilder.group({
    Firstname:['',Validators.required],
    Lastname:['',Validators.required],
   
    Gender: ['',Validators.required],
    Adress: ['',Validators.required],
    EmailID: [''],
    Phone: ['',Validators.required],
    DOB: ['',Validators.required],
    HospitalName:['',Validators.required]

   });
  }
  onSubmit({value,valid}:{value: Customer_register,valid:boolean }){
 console.log(value,valid);
}
  
onTestGet() {
   this.httpService.getCurrentTime()
   .subscribe(
     data => this.getDATA=JSON.stringify(data),
     error => alert (error),
     () => console.log("Finished")
   )
}  
}


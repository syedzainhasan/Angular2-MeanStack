import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Register_Employee } from './employee.interface';
@Component({
  selector: 'app-register-employee',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  register_employee:FormGroup;
  
    constructor(private formbuilder : FormBuilder){};

  ngOnInit() {
    this.register_employee= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Adress: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      CNIC: ['',Validators.required],
      Salary: ['',Validators.required],
      JoiningDate: ['',Validators.required],
      Designation: ['',Validators.required],
      Password: ['',Validators.required],
      Gender: ['',Validators.required]
  
     });
    }
    onSubmit({value,valid}:{value: Register_Employee,valid:boolean }){
   console.log(value,valid);
  }
}


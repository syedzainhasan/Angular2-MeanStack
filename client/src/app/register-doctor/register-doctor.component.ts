import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {Register_Doctor } from './doctor.interface';
@Component({
  selector: 'app-register-doctor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  register_doctor:FormGroup;
  
    constructor(private formbuilder : FormBuilder){};

  ngOnInit() {
    this.register_doctor= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Adress: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      PMDC: ['',Validators.required],
      HospitalName:['',Validators.required]
  
     });
    }
    onSubmit({value,valid}:{value: Register_Doctor,valid:boolean }){
   console.log(value,valid);
  }
}

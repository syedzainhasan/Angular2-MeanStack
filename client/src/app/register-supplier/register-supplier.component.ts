import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Register_Supplier } from './supplier.interface';


@Component({
  selector: 'app-register-supplier',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent implements OnInit {

register_supplier:FormGroup;
  
    constructor(private formbuilder : FormBuilder){};

  ngOnInit() {
    this.register_supplier= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Adress: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      CompanyName: ['',Validators.required],
      CompanyEmail:['']
  
     });
    }
    onSubmit({value,valid}:{value: Register_Supplier,valid:boolean }){
   console.log(value,valid);
  }
}

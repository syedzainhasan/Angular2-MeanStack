import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Register_Supplier } from './supplier.interface';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-register-supplier',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent implements OnInit {

register_supplier:FormGroup;

lists: any;i;buttonname;titlename;
list :any;
  
    constructor(private formbuilder : FormBuilder,
      private authService:AuthService
     
    
    
    
    
    ){

     
    };

     yo= {
      body:true
    }

    onSubmit(register_supplier){ 


{
      const supplier ={ 
        Firstname:this.register_supplier.get('Firstname').value,
        Lastname:this.register_supplier.get('Lastname').value,
        Address:this.register_supplier.get('Address').value,
        EmailID:this.register_supplier.get('EmailID').value,
        Phone:this.register_supplier.get('Phone').value,
        CompanyName:this.register_supplier.get('CompanyName').value,
        CompanyEmail:this.register_supplier.get('CompanyEmail').value,

      }

     
      if(this.buttonname=="Register")
      {
      this.authService.registerSupplier(supplier).subscribe( data =>
        {

console.log(data);
      });
    }
     else{
      this.authService.updateSupplier(supplier.Firstname,supplier).subscribe( data =>
        {

console.log(data);
      });
    
    
    }

  }
    
  }

  
 
  onClick(deviceValue)
  { 
    console.log(deviceValue);
    if(deviceValue=="Edit")
    {
      this.yo.body=false;
      this.titlename="Update Supplier";
      this.buttonname="Update";
    }
    else{
      this.yo.body=true;
      this.titlename="Register Supplier";
      this.buttonname="Register";
    }

    
  }
  ngOnInit() {
    this.register_supplier= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Address: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      CompanyName: ['',Validators.required],
      CompanyEmail:['']
  
     });
     this.authService.getSupplier().subscribe( data =>
      {
  
      this.list = data;
  
  
    });
    this.titlename="Register Suppliers";
    this.buttonname="Register";
     
    }
 
    


getName()
{


  

console.log(this.list);


}


fetchName(deviceValue)
{

    for( this.i =0 ; this.i< this.list.length; this.i++)
    {
          if(deviceValue==this.list[this.i].Firstname)
          {
            console.log(this.list[this.i]);
        this.register_supplier.get('Firstname').setValue(this.list[this.i].Firstname),
        this.register_supplier.get('Lastname').setValue(this.list[this.i].Lastname),
        this.register_supplier.get('Address').setValue(this.list[this.i].Address),
        this.register_supplier.get('EmailID').setValue(this.list[this.i].EmailID),
        this.register_supplier.get('Phone').setValue(this.list[this.i].Phone),
        this.register_supplier.get('CompanyName').setValue(this.list[this.i].CompanyName),
        this.register_supplier.get('CompanyEmail').setValue(this.list[this.i].CompanyEmail)


          }

    }
  
}

  
}


import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Customer_register } from './customer-register.interface';
import {HTTPTestService} from './http_test';
import {AuthService} from '../services/auth.service';

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




  lists: any;i;buttonname;titlename;
  list :any;
    
      constructor(private formbuilder : FormBuilder,
        private authService:AuthService
       
      
      
      
      
      ){
  
       
      };
  
       yo= {
        body:true
      }
  



      onSubmit(customer_register){ 


        {
              const customer ={ 
                Firstname:this.customer_register.get('Firstname').value,
                Lastname:this.customer_register.get('Lastname').value,
                Address:this.customer_register.get('Adress').value,
                EmailID:this.customer_register.get('EmailID').value,
                Phone:this.customer_register.get('Phone').value,
                DOB:this.customer_register.get('DOB').value,
               HospitalName:this.customer_register.get('HospitalName').value,
               Gender:this.customer_register.get('Gender').value,
        
              }
        
             
              if(this.buttonname=="Register")
              {
              this.authService.registerCustomer(customer).subscribe( data =>
                {
        
        console.log(data);
              });
            }
             else{
              this.authService.updateCustomer(customer.Firstname,customer).subscribe( data =>
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
              this.titlename="Update Customer";
              this.buttonname="Update";
            }
            else{
              this.yo.body=true;
              this.titlename="Register Customer";
              this.buttonname="Register";
            }
        
            
          }


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
   this.authService.getCustomer().subscribe( data =>
    {

    this.list = data;
        console.log(this.list);

  });
  this.titlename="Register Customer";
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
      this.customer_register.get('Firstname').setValue(this.list[this.i].Firstname),
      this.customer_register.get('Lastname').setValue(this.list[this.i].Lastname),
      this.customer_register.get('Adress').setValue(this.list[this.i].Address),
      this.customer_register.get('EmailID').setValue(this.list[this.i].EmailID),
      this.customer_register.get('Phone').setValue(this.list[this.i].Phone),
      this.customer_register.get('DOB').setValue(this.list[this.i].DOB),
      this.customer_register.get('Gender').setValue(this.list[this.i].Gender),
      this.customer_register.get('HospitalName').setValue(this.list[this.i].HospitalName)


        }

  }

}


  

}


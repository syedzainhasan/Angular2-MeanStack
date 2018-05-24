import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Register_Employee } from './employee.interface';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-register-employee',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  register_employee:FormGroup;
  
  lists: any;i;buttonname;titlename;j;
  list :any;
    
      constructor(private formbuilder : FormBuilder,
        private authService:AuthService
       
      
      
      
      
      ){
  
       
      };
  
       yo= {
        body:true
      }
  
      onSubmit(register_employee){ 
  
  
  {
        const employee ={ 
          Firstname:this.register_employee.get('Firstname').value,
          Lastname:this.register_employee.get('Lastname').value,
          Address:this.register_employee.get('Adress').value,
          EmailID:this.register_employee.get('EmailID').value,
          Phone:this.register_employee.get('Phone').value,
          CNIC:this.register_employee.get('CNIC').value,
          Salary:this.register_employee.get('Salary').value,
          JoiningDate:this.register_employee.get('JoiningDate').value,
          Designation:this.register_employee.get('Designation').value,
          Password:this.register_employee.get('Password').value,
          Gender:this.register_employee.get('Gender').value,
        }
  
       
        if(this.buttonname=="Register")
        {
        this.authService.registerEmployee(employee).subscribe( data =>
          {
  
  console.log(data);
        });
      }
       else{
        this.authService.updateEmployee(employee.Firstname,employee).subscribe( data =>
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
        this.titlename="Update Employee";
        this.buttonname="Update";
      }
      else{
        this.yo.body=true;
        this.titlename="Register Employee";
        this.buttonname="Register";
      }
  
      
    }

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


     this.authService.getEmployee().subscribe( data =>
      {
  
      this.list = data;
  
  
    });
    this.titlename="Register Employee";
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
        this.register_employee.get('Firstname').setValue(this.list[this.i].Firstname),
        this.register_employee.get('Lastname').setValue(this.list[this.i].Lastname),
        this.register_employee.get('Adress').setValue(this.list[this.i].Address),
        this.register_employee.get('EmailID').setValue(this.list[this.i].EmailID),
        this.register_employee.get('Phone').setValue(this.list[this.i].Phone),
        this.register_employee.get('CNIC').setValue(this.list[this.i].CNIC),
        this.register_employee.get('Salary').setValue(this.list[this.i].Salary),
        this.register_employee.get('Password').setValue(this.list[this.i].Password),
        this.register_employee.get('JoiningDate').setValue(this.list[this.i].JoiningDate),
      this.register_employee.get('Designation').setValue(true)
        
      
        //this.register_employee.get('Gender').setValue(this.list[this.i].Gender)


          }

    }
  
}

  


}


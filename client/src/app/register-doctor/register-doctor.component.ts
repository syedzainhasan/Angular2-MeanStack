import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {Register_Doctor } from './doctor.interface';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-register-doctor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  register_doctor:FormGroup;
  
  lists: any;i;buttonname;titlename;
  list :any;
    
      constructor(private formbuilder : FormBuilder,
        private authService:AuthService
       
      
      
      
      
      ){
  
       
      };
  
       yo= {
        body:true
      }
  



      onSubmit(register_doctor){ 


        {
              const doctor ={ 
                Firstname:this.register_doctor.get('Firstname').value,
                Lastname:this.register_doctor.get('Lastname').value,
                Address:this.register_doctor.get('Adress').value,
                EmailID:this.register_doctor.get('EmailID').value,
                Phone:this.register_doctor.get('Phone').value,
                PMDC:this.register_doctor.get('PMDC').value,
                HospitalName:this.register_doctor.get('HospitalName').value,
        
              }
        
             
              if(this.buttonname=="Register")
              {
              this.authService.registerDoctor(doctor).subscribe( data =>
                {
        
        console.log(data);
              });
            }
             else{
              this.authService.updateDoctor(doctor.Firstname,doctor).subscribe( data =>
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
              this.titlename="Update Doctor";
              this.buttonname="Update";
            }
            else{
              this.yo.body=true;
              this.titlename="Register Doctor";
              this.buttonname="Register";
            }
        
            
          }








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
     this.authService.getDoctor().subscribe( data =>
      {
  
      this.list = data;
  
  
    });
    this.titlename="Register Doctor";
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
            this.register_doctor.get('Firstname').setValue(this.list[this.i].Firstname),
            this.register_doctor.get('Lastname').setValue(this.list[this.i].Lastname),
            this.register_doctor.get('Adress').setValue(this.list[this.i].Address),
            this.register_doctor.get('EmailID').setValue(this.list[this.i].EmailID),
            this.register_doctor.get('Phone').setValue(this.list[this.i].Phone),
            this.register_doctor.get('PMDC').setValue(this.list[this.i].PMDC),
            this.register_doctor.get('HospitalName').setValue(this.list[this.i].HospitalName)
    
    
              }
    
        }
      
    }
    



}


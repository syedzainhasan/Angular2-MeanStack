import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {Register_Agent } from './agent.interface';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-register-agent',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  register_agent:FormGroup;
  
  lists: any;i;buttonname;titlename;
  list :any;
    
      constructor(private formbuilder : FormBuilder,
        private authService:AuthService
       
      
      
      
      
      ){
  
       
      };

      yo= {
        body:true
      }
  
      onSubmit(register_agent){ 
  
  
  {
        const agent ={ 
          Firstname:this.register_agent.get('Firstname').value,
          Lastname:this.register_agent.get('Lastname').value,
          Address:this.register_agent.get('Adress').value,
          EmailID:this.register_agent.get('EmailID').value,
          Phone:this.register_agent.get('Phone').value,
          Company:this.register_agent.get('Company').value,
          
        }
  
       
        if(this.buttonname=="Register")
        {
        this.authService.registerAgent(agent).subscribe( data =>
          {
  
  console.log(data);
        });
      }
       else{
        this.authService.updateAgent(agent.Firstname,agent).subscribe( data =>
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
        this.titlename="Update Agent";
        this.buttonname="Update";
      }
      else{
        this.yo.body=true;
        this.titlename="Register Agent";
        this.buttonname="Register";
      }
  
      
    }
    



  ngOnInit() {
    this.register_agent= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Adress: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      Company:['',Validators.required]
  
     });
     this.authService.getAgent().subscribe( data =>
      {
  
      this.list = data;
  
  
    });
    this.titlename="Register Agent";
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
            this.register_agent.get('Firstname').setValue(this.list[this.i].Firstname),
            this.register_agent.get('Lastname').setValue(this.list[this.i].Lastname),
            this.register_agent.get('Adress').setValue(this.list[this.i].Address),
            this.register_agent.get('EmailID').setValue(this.list[this.i].EmailID),
            this.register_agent.get('Phone').setValue(this.list[this.i].Phone),
            this.register_agent.get('Company').setValue(this.list[this.i].Company)
            
    
              }
    
        }
      
    }

}

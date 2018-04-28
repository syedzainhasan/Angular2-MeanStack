import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {Register_Agent } from './agent.interface';
@Component({
  selector: 'app-register-agent',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  register_agent:FormGroup;
  
    constructor(private formbuilder : FormBuilder){};

  ngOnInit() {
    this.register_agent= this.formbuilder.group({
      Firstname:['',Validators.required],
      Lastname:['',Validators.required],
      Adress: ['',Validators.required],
      EmailID: [''],
      Phone: ['',Validators.required],
      Company:['',Validators.required]
  
     });
    }
    onSubmit({value,valid}:{value: Register_Agent,valid:boolean }){
   console.log(value,valid);
  }
}

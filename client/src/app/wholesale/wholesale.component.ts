import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';

@Component({ 
  selector: 'app-wholesale',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css'],
})

export class WholesaleComponent implements OnInit {

  
  
wholesale:FormGroup;

  constructor(private formbuilder : FormBuilder ){}

  ngOnInit() {
   this.wholesale= this.formbuilder.group({
    

   });
  }

}
  




import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({ 
  selector: 'app-retailsale',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './retailsale.component.html',
  styleUrls: ['./retailsale.component.css'],
})

export class RetailsaleComponent implements OnInit {

  list :any;date_val;var;doc;
  doc_list :any; pro_list:any;
getDATA:string;
retailsale:FormGroup;
selected : any;







////////////////////////////////////////////////////////////











////////////////////////////////////////////////////////////

  constructor(private formbuilder : FormBuilder,private authService:AuthService ){}

  ngOnInit() {
   this.retailsale= this.formbuilder.group({
    

   });



   this.authService.getCustomer().subscribe( data =>
    {

    this.list = data;


  });

  this.selected = document.getElementById("sad");
  this.selected.insertRow(0);

  this.authService.getProduct().subscribe( data =>
    {

    this.pro_list = data;
this.doc=this.pro_list;

  });


  this.authService.getDoctor().subscribe( data =>
    {

    this.doc_list = data;


  });

this.selected  ="car";
  this.var = new Date();
  this.var = this.var.toString();
  this.date_val=(this.var.split(" ",4).toString());
  this.date_val = this.date_val.replace(/,/g , ' ');
  console.log(this.date_val);
  }

}
  




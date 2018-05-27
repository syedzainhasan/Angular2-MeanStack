import { Component, OnInit,ViewEncapsulation , EventEmitter, Input,  Output} from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';



@Component({ 
  selector: 'app-retailsale',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './retailsale.component.html',
  styleUrls: ['./retailsale.component.css'],
})

export class RetailsaleComponent implements OnInit {
i:any;
  list :any;date_val;var;doc;
  doc_list :any; pro_list:any;
  getDATA;
  retailsale:FormGroup;
  lo=new Array<any>();
  tablelist:any[100] ;
  retail:FormGroup;price:number;gst:number;discount:number;
getGST:number;getDISCOUNT:number; net:number;




 


////////////////////////////////////////////////////////////







private fieldArray: Array<any> = [];
private newAttribute: any = {};



////////////////////////////////////////////////////////////

  constructor(private formbuilder : FormBuilder,private authService:AuthService  ){}

  ngOnInit() {
    this.retailsale= this.formbuilder.group({
      Quantity:['',Validators.required],
      Discount:['',Validators.required],
      Price: ['',Validators.required],
      GST: ['',Validators.required],
      Name: ['',Validators.required],
    
     
  
     });
this.price=0;
  this.gst=0;

   this.authService.getCustomer().subscribe( data =>
    {

    this.list = data;


  });

  

  this.authService.getProduct().subscribe( data =>
    {

    this.pro_list = data;
this.doc=this.pro_list;

  });


  this.authService.getDoctor().subscribe( data =>
    {

    this.doc_list = data;


  });


  this.var = new Date();
  this.var = this.var.toString();
  this.date_val=(this.var.split(" ",4).toString());
  this.date_val = this.date_val.replace(/,/g , ' ');
  
  }

  Add()
{



  

this.fieldArray.push.apply(this.newAttribute);

this.fieldArray[this.fieldArray.length-1].Product = this.retailsale.get('Name').value;

this.fieldArray[this.fieldArray.length-1].Quantity = this.retailsale.get('Quantity').value;
this.newAttribute.Price = this.retailsale.get('Price').value;
this.newAttribute.Discount = this.retailsale.get('Discount').value

console.log(this.fieldArray);
}


onSubmit(onSubmit)
{

}


onClickName(val)
{

 
  
  this.retailsale.get('Name').setValue(val);

}
addFieldValue() {







 
  
  
  this.newAttribute.code = this.fieldArray.length;
  this.newAttribute.product = this.retailsale.get('Name').value;
this.newAttribute.quantity = this.retailsale.get('Quantity').value;
this.newAttribute.price = this.retailsale.get('Price').value;
this.newAttribute.discount = this.retailsale.get('Discount').value;
this.newAttribute.gst=this.retailsale.get('GST').value;


this.fieldArray.push(this.newAttribute);
this.newAttribute = {};


this.price=0;this.gst=0;
this.discount=0;

for(this.i=0;this.i<this.fieldArray.length;this.i++)

{

  
this.getDATA= Number(this.fieldArray[this.i].price);
this.price = this.price+ (this.getDATA);
this.getGST=parseFloat(this.fieldArray[this.i].gst);
this.getDISCOUNT = Number(this.fieldArray[this.i].discount);
this.getDISCOUNT=this.getDISCOUNT/100;
this.getDISCOUNT=this.getDISCOUNT*this.getDATA;






this.getGST=this.getGST/100;
this.getGST=this.getGST*this.getDATA;
this.gst=this.gst+this.getGST;
this.discount=this.discount+this.getDISCOUNT;






}




this.net = this.price-this.discount+this.gst;


}

deleteFieldValue(index) {
  
  this.fieldArray.splice(index, 1);
  if(this.fieldArray.length==0)
  {
 
 this.net=0;
 this.price=0;
 this.discount=0;
 this.gst=0;
  }
}
deleteFieldValues(index) {
this.fieldArray=[];
this.newAttribute.code = "";
this.newAttribute.product = "";
this.newAttribute.quantity = "";
this.newAttribute.price = "";
this.newAttribute.discount ="";

 this.net=0;
 this.price=0;
 this.discount=0;
 this.gst=0;
}

}


  





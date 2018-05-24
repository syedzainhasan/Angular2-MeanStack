import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
//import { Register_Employee } from './product.interface';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-register-product',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  register_product:FormGroup;
  
  lists: any;i;buttonname;titlename;j;
  list :any;
    
      constructor(private formbuilder : FormBuilder,
        private authService:AuthService
       
      
      
      
      
      ){
  
       
      };
  
       yo= {
        body:true
      }
  
      onSubmit(register_product){ 
  
  
  {
        const product ={ 
          Name:this.register_product.get('Name').value,
          PacksPerBox:this.register_product.get('PacksPerBox').value,
          Barcode:this.register_product.get('Barcode').value,
          DrugGroup:this.register_product.get('DrugGroup').value,
          Formulae:this.register_product.get('Formulae').value,
          UnitsinPack:this.register_product.get('UnitsinPack').value,
          BoxPerCarton:this.register_product.get('BoxPerCarton').value,
          Packing:this.register_product.get('Packing').value,
          MinQuantity:this.register_product.get('MinQuantity').value,
          RackNo:this.register_product.get('RackNo').value,
          
        }
  
       
        if(this.buttonname=="Register")
        {
        this.authService.registerProduct(product).subscribe( data =>
          {
  
  console.log(data);
        });
      }
       else{
        this.authService.updateProduct(product.Name,product).subscribe( data =>
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
        this.titlename="Update Product";
        this.buttonname="Update";
      }
      else{
        this.yo.body=true;
        this.titlename="Register Product";
        this.buttonname="Register";
      }
  
      
    }

  ngOnInit() {
    this.register_product= this.formbuilder.group({
      Name:['',Validators.required],
      PacksPerBox:['',Validators.required],
      Barcode: ['',Validators.required],
      DrugGroup: ['',Validators.required],
      Formulae: ['',Validators.required],
      UnitsinPack: ['',Validators.required],
      Packing: ['',Validators.required],
      MinQuantity: ['',Validators.required],
      RackNo: ['',Validators.required],
      BoxPerCarton: ['',Validators.required]
     
    
        ///////////////////////////
        
  
     });


     this.authService.getProduct().subscribe( data =>
      {
  
      this.list = data;
  
  
    });
    this.titlename="Register Product";
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
          if(deviceValue==this.list[this.i].Name)
          {
            console.log(this.list[this.i]);
        this.register_product.get('Name').setValue(this.list[this.i].Name),
        this.register_product.get('PacksPerBox').setValue(this.list[this.i].PacksPerBox),
        this.register_product.get('Barcode').setValue(this.list[this.i].Barcode),
        this.register_product.get('DrugGroup').setValue(this.list[this.i].DrugGroup),
        this.register_product.get('Formulae').setValue(this.list[this.i].Formulae),
        this.register_product.get('UnitsinPack').setValue(this.list[this.i].UnitsinPack),
        this.register_product.get('BoxPerCarton').setValue(this.list[this.i].BoxPerCarton),
        this.register_product.get('Packing').setValue(this.list[this.i].Packing),
        this.register_product.get('MinQuantity').setValue(this.list[this.i].MinQuantity),
        this.register_product.get('RackNo').setValue(this.list[this.i].RackNo)

        ///////////////////////////////////////////////////////////////////////
      
       
        

          }

    }
  
}

  


}


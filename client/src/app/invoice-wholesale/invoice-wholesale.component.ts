import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-invoice-wholesale',
  templateUrl: './invoice-wholesale.component.html',
  styleUrls: ['./invoice-wholesale.component.css']
})
export class InvoiceWholesaleComponent implements OnInit {

    
wholesale:FormGroup;
  constructor(private formbuilder : FormBuilder) { }

  ngOnInit() {
    this.wholesale= this.formbuilder.group({
    

    });
  }

}

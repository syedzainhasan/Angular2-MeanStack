import { ViewEncapsulation,Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  
  
  items: MenuItem[];
  
      ngOnInit() {
        
      }
}

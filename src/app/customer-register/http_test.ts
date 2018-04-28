import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Customer_register } from './customer-register.interface';

import 'rxjs/Rx'
@Injectable()
export class HTTPTestService{

    constructor(private http: Http){}

        getCurrentTime(){
return this.http.get('http://date.jsontest.com')
        .map(res => res.json())
        }
        postJSON(){

                
               
        }
 
        

             
}
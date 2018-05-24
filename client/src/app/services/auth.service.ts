import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  domain = "http://localhost:8080"
 
  constructor(  

    private http: Http 
  )
  {

  }
    
    registerSupplier(supplier)
    {
      return this.http.post (this.domain + '/authentication/register-supplier',supplier).map(res=>res.json());
    }
    

    getSupplier()
    {
      return this.http.get (this.domain + '/authentication/get-supplier').map(res=>res.json());
    }

   updateSupplier(name,supplier)
    {
      return this.http.put (this.domain + '/authentication/update-supplier/name',supplier).map(res=>res.json());
    }






    /////////////////////////////////////////////////








    registerAgent(agent)
    {
      return this.http.post (this.domain + '/agent/register-agent',agent).map(res=>res.json());
    }
    

    getAgent()
    {
      return this.http.get (this.domain + '/agent/get-agent').map(res=>res.json());
    }

   updateAgent(name,agent)
    {
      return this.http.put (this.domain + '/agent/update-agent/name',agent).map(res=>res.json());
    }



    /////////////////////////////////







    registerDoctor(doctor)
    {
      return this.http.post (this.domain + '/doctor/register-doctor',doctor).map(res=>res.json());
    }
    

    getDoctor()
    {
      return this.http.get (this.domain + '/doctor/get-doctor').map(res=>res.json());
    }

   updateDoctor(name,doctor)
    {
      return this.http.put (this.domain + '/doctor/update-doctor/name',doctor).map(res=>res.json());
    }


/////////////////////////////////////


registerCustomer(customer)
{
  return this.http.post (this.domain + '/customer/register-customer',customer).map(res=>res.json());
}


getCustomer()
{
  return this.http.get (this.domain + '/customer/get-customer').map(res=>res.json());
}

updateCustomer(name,customer)
{
  return this.http.put (this.domain + '/customer/update-customer/name',customer).map(res=>res.json());
}




/////////////////////////////////////////////////////






registerEmployee(employee)
{
  return this.http.post (this.domain + '/employee/register-employee',employee).map(res=>res.json());
}


getEmployee()
{
  return this.http.get (this.domain + '/employee/get-employee').map(res=>res.json());
}

updateEmployee(name,employee)
{
  return this.http.put (this.domain + '/employee/update-employee/name',employee).map(res=>res.json());
}




/////////////////////////////////////






registerProduct(supplier)
    {
      return this.http.post (this.domain + '/product/register-product',supplier).map(res=>res.json());
    }
    

    getProduct()
    {
      return this.http.get (this.domain + '/product/get-product').map(res=>res.json());
    }

   updateProduct(name,supplier)
    {
      return this.http.put (this.domain + '/product/update-product/name',supplier).map(res=>res.json());
    }

}



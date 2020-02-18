import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string= "/assets/data/employee.json";

  constructor(private http:HttpClient) { }
  // getEmployees(){
  //   return [
  //     {'id':5998,'name':'abm'},
  //     {'id':6001,'name':'ars','subject':'EEE'},
  //     {'id':4444,'name':'btn'}
  //   ]
  // }


  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    // .catch(this.errorHandler)
  }

  // errorHandler(error: HttpErrorResponse){
  //     return Observable.throw(error.message || "Server Error")
  // }

}

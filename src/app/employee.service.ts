import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {'id':5998,'name':'abm'},
      {'id':6001,'name':'ars','subject':'EEE'},
      {'id':4444,'name':'btn'}
    ]
  }
}

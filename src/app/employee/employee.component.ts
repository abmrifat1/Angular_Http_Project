import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  public employees=[]

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data=> this.employees=data)
  }

}

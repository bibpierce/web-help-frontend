import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Employee} from "./employee";
import {MessageService} from "./message.service";
import {UtilService} from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public isCreate = true;

  private employeeUrl = '/url/employee'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private utilService: UtilService,
    private http: HttpClient) { }

  public getEmployeeList(): Observable<Employee[]>{
    const url = `${this.employeeUrl}/list`;
    return this.http.get<Employee[]>(url)
      .pipe(tap(_ => this.utilService.log('fetched employees')),
        catchError(this.utilService.handleError<Employee[]>('getEmployeeList', [])));
  }

  public getEmployee(id: number): Observable<Employee>{
    const url = `${this.employeeUrl}/view/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.utilService.log(`fetched employee id=${id}`)),
      catchError(this.utilService.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  public createEmployee(employee: Employee){
    const url = `${this.employeeUrl}/create`;
    return this.http.post<Employee>(url, employee, this.httpOptions).pipe(
      tap((newEmployee : Employee) => this.utilService.log(`added employee w/ id=${newEmployee.id}`)),
      catchError(this.utilService.handleError<Employee>('createEmployee'))
    );
  }

  public deleteEmployee(employee: Employee): Observable<Employee>{
    const url = `${this.employeeUrl}/delete/${employee.id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.utilService.log(`deleted employee id=${employee.id}`)),
      catchError(this.utilService.handleError<Employee>('deleteEmployee'))
    )
  }

  public updateEmployee(employee : Employee): Observable<any>{
    const url = `${this.employeeUrl}/update`;

    return this.http.put(url, employee, this.httpOptions).pipe(
      tap(_ => this.utilService.log(`updated hero id=${employee.id}`)),
      catchError(this.utilService.handleError<any>('updateEmployee'))
    )
  }



}

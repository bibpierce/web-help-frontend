import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Employee} from "./employee";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = '/url/employee'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private  messageService: MessageService) { }

  public getEmployeeList(): Observable<Employee[]>{
    const url = `${this.employeeUrl}/list`;
    return this.http.get<Employee[]>(url)
      .pipe(tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployeeList', [])));
  }

  public getEmployee(id: number): Observable<Employee>{
    const url = `${this.employeeUrl}/view/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  public createEmployee(employee: Employee){
    const url = `${this.employeeUrl}/create`;
    return this.http.post<Employee>(url, employee, this.httpOptions).pipe(
      tap((newEmployee : Employee) => this.log(`added employee w/ id=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('createEmployee'))
    );
  }

  public deleteEmployee(employee: Employee): Observable<Employee>{
    const url = `${this.employeeUrl}/delete/${employee.id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${employee.id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    )
  }

  public updateEmployee(employee : Employee): Observable<any>{
    const url = `${this.employeeUrl}/update`;

    return this.http.put(url, employee, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

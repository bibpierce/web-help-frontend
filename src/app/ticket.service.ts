import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Ticket} from  "./ticket";
import {UtilService} from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  public isCreate = true;

  private ticketUrl = '/url/ticket'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private utilService: UtilService) {
  }

  public getTicketList(): Observable<Ticket[]>{
    const url = `${this.ticketUrl}/list`;
    return this.http.get<Ticket[]>(url)
      .pipe(tap(_ => this.utilService.log('fetched employees')),
        catchError(this.utilService.handleError<Ticket[]>('getEmployeeList', [])));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Ticket} from  "./ticket";
import {UtilService} from "./util.service";
import {Employee} from "./employee";

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

  public getTicket(ticketNo: number): Observable<Ticket>{
    const url = `${this.ticketUrl}/view/${ticketNo}`;
    return this.http.get<Ticket>(url).pipe(
      tap(_ => this.utilService.log(`fetched ticket no=${ticketNo}`)),
      catchError(this.utilService.handleError<Ticket>(`getTicket no=${ticketNo}`))
    );
  }

  public createTicket(ticket: Ticket){
    const url = `${this.ticketUrl}/create`;
    return this.http.post<Ticket>(url, ticket, this.httpOptions).pipe(
      tap((newTicket : Ticket) => this.utilService.log(`added ticket w/ id=${newTicket.ticketNumber}`)),
      catchError(this.utilService.handleError<Ticket>('createEmployee'))
    );
  }
}

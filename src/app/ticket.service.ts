import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Ticket} from "./ticket";
import {UtilService} from "./util.service";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  public isCreate = true;

  private ticketUrl = '/url/ticket'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private utilService: UtilService) {
  }

  public getTicketList(): Observable<Ticket[]> {
    const url = `${this.ticketUrl}/list`;
    return this.http.get<Ticket[]>(url)
      .pipe(tap(_ => this.utilService.log('fetched employees')),
        catchError(this.utilService.handleError<Ticket[]>('getEmployeeList', [])));
  }

  public getTicket(ticketNo: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/view/${ticketNo}`;
    return this.http.get<Ticket>(url).pipe(
      tap(_ => this.utilService.log(`fetched ticket no=${ticketNo}`)),
      catchError(this.utilService.handleError<Ticket>(`getTicket no=${ticketNo}`))
    );
  }

  public createTicket(ticket: Ticket) {
    const url = `${this.ticketUrl}/create`;
    return this.http.post<Ticket>(url, ticket, this.httpOptions).pipe(
      tap((newTicket: Ticket) => this.utilService.log(`added ticket w/ id=${newTicket.ticketNumber}`)),
      catchError(this.utilService.handleError<Ticket>('createTicket'))
    );
  }

  public deleteTicket(ticket: Ticket): Observable<Ticket> {
    const url = `${this.ticketUrl}/delete/${ticket.ticketNumber}`;

    return this.http.delete<Ticket>(url, this.httpOptions).pipe(
      tap(_ => this.utilService.log(`deleted ticket id=${ticket.ticketNumber}`)),
      catchError(this.utilService.handleError<Ticket>('deleteTicket'))
    )
  }

  public updateTicket(ticket: Ticket): Observable<any> {
    const url = `${this.ticketUrl}/update`;

    return this.http.put(url, ticket, this.httpOptions).pipe(
      tap(_ => this.utilService.log(`updated ticket id=${ticket.ticketNumber}`)),
      catchError(this.utilService.handleError<any>('updateTicket'))
    )
  }

  public assignWatchers(ticketNumber: number, employeeNumbers: number[]) {
    const url = `${this.ticketUrl}/watchers/${ticketNumber}`;
    const queryParams = { employeeNumbers : employeeNumbers.join(',') };
    const params = new HttpParams({ fromObject: queryParams });
    return this.http.patch(url, {}, { params } );
  }
}

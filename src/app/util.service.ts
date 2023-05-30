import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private  messageService: MessageService) { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

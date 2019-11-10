import { Injectable } from '@angular/core';

import { Message } from './messages/message';
import { MESSAGES } from './mock-messages';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

	private messagesUrl = 'api/messages'; // URL to web api

	constructor(private http: HttpClient) { }

	getMessages(): Observable<Message[]> {
		return of(MESSAGES);
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}

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

	// get("/api/contacts")
    getMessages(): Promise<void | Message[]> {
      return this.http.get(this.messagesUrl)
                 .toPromise()
                 .then(response => response. as Message[])
                 .catch(this.handleError);
    }

	// getMessages(): Observable<Message[]> {
	// 	return of(MESSAGES);
	// }

	private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}

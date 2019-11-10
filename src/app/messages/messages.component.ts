import { Component, OnInit } from '@angular/core';

import { Message } from '../messages/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
	messages: Message[];

	selectedMessage: Message;

	constructor(private messageService: MessageService) { }

	getMessages(): void {
		// this.messageService.getMessages()
		// 	.subscribe(messages => this.messages = messages);
		this.messageService.getMessages()
		.then((messages: Contact[]) => {
			this.messages = messages.map((message) => {
				return message;
			});
		});
	}

	ngOnInit() {
		this.getMessages();
	}

	onSelect(message: Message): void {
		this.selectedMessage = message;
	}
}

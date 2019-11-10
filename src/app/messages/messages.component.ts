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
		this.messageService.getMessages()
			.subscribe(messages => this.messages = messages);
	}

	ngOnInit() {
		this.getMessages();
	}

	onSelect(message: Message): void {
		this.selectedMessage = message;
	}
}

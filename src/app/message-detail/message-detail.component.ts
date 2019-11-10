import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../messages/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
	@Input() message: Message;

	constructor() { }

	ngOnInit() {

	}
}

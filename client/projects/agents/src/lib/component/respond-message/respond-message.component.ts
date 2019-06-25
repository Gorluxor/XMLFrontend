import { Component, OnInit } from '@angular/core';
import {AgentsService} from '../../agents.service';
import {Message} from '../../../../../../src/model/Message';

@Component({
  selector: 'lib-respond-message',
  templateUrl: './respond-message.component.html',
  styleUrls: ['./respond-message.component.css']
})
export class RespondMessageComponent implements OnInit {

  number: number[];
  message: string;
  messages: Message[];

  constructor(private agentService: AgentsService) {
    this.number = [];
    this.message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    this.number.push(3);
    this.number.push(3);
    this.number.push(3);
  }

  ngOnInit() {
    this.agentService.getAllMessages().subscribe(data => {
      this.messages = data;
    });
  }


}

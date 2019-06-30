import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Message} from '../../../../../../src/model/Message';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../../../../../agents/src/lib/agents.service';

@Component({
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  form: FormGroup;

  message: Message;
  messages: Message[];
  date: Date;
  crId: number;

  constructor(private route: ActivatedRoute, private agentService: AgentsService) {

    this.date = new Date();

  }

  ngOnInit() {
    this.crId = +this.route.snapshot.paramMap.get('id');
    this.message = new Message();
    this.agentService.getAllMessages(this.crId).subscribe(data => {
      this.messages = data;
      console.log(this.messages);
      for ( const m of this.messages) {
        m.timeStamp = new Date(m.timeStamp);
      }
    });
  }
  onRespond() {
    this.message.timeStamp = new Date();
    this.message.sender = this.messages[0].sender;
    this.message.receiver = this.messages[0].receiver;
    this.agentService.respondMessage(this.crId, this.message).subscribe(
      data => {
        console.log(this.message);
        window.location.reload();
      }

    );

  }
}

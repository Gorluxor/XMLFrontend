import { Component, OnInit } from '@angular/core';
import {AgentsService} from '../../agents.service';
import {Message} from '../../../../../../src/model/Message';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-respond-message',
  templateUrl: './respond-message.component.html',
  styleUrls: ['./respond-message.component.css']
})
export class RespondMessageComponent implements OnInit {

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
    this.message.sender = this.messages[0].receiver;
    this.message.receiver = this.messages[0].sender;
    this.agentService.respondMessage(this.crId, this.message).subscribe(
      data => {
        console.log(this.message);
        window.location.reload();
      }

    );

  }

}

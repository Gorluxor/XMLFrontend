import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Message} from '../../../../../../src/model/Message';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../../../../../agents/src/lib/agents.service';
import {User} from '../../../../../../src/model/User';
import {UserService} from '../../user.service';
import {AuthService} from '../../../../../auth/src/lib/auth.service';

@Component({
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  form: FormGroup;

  user: User;
  message: Message;
  messages: Message[];
  date: Date;
  crId: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private agentService: AgentsService, private authService: AuthService) {

    this.date = new Date();

  }


  ngOnInit() {
    this.crId = +this.route.snapshot.paramMap.get('id');
    this.message = new Message();
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;
      this.agentService.getAllMessages(this.crId, this.user.id ).subscribe(data1 => {
        this.messages = data1;
        console.log(this.messages);
        for ( const m of this.messages) {
          m.timeStamp = new Date(m.timeStamp);
        }
      });

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

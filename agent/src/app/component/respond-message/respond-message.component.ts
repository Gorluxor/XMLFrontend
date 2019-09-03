import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Message} from '../../model/Message';
import {User} from '../../model/User';
import {AgentsService} from '../../service/agents.service';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-respond-message',
  templateUrl: './respond-message.component.html',
  styleUrls: ['./respond-message.component.css']
})
export class RespondMessageComponent implements OnInit {

  form: FormGroup;

  message: Message;
  messages: Message[];
  date: Date;
  crId: number;
  user: User;

  constructor(private route: ActivatedRoute, private agentService: AgentsService, private userService: UserService, private authService:
  AuthService ) {

    this.date = new Date();

  }

  ngOnInit() {
    this.crId = parseInt(this.authService.getCR());
    this.message = new Message();
    console.log('CR ID ', this.crId);
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;
      this.agentService.getAllMessages(this.user.id, this.crId).subscribe(data1 => {
        console.log(data1);
        this.messages = data1.messageDTO;
       /* for (const m of this.messages) {
          m.timeStamp = new Date(m.timeStamp);
        }*/
        console.log('LISTA PORUKA', this.messages);
      });
      console.log('USER ID', this.user.id);
    });
   /* this.message = new Message();
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;
      this.agentService.getAllMessages(this.crId, this.user.id).subscribe(data1 => {
        this.messages = data1;
        console.log(this.messages);
        for (const m of this.messages) {
          m.timeStamp = new Date(m.timeStamp);
        }
      });
    });*/


  }
  onRespond() {
    this.message.id = this.user.id;
    this.message.timeStamp = new Date();
    this.message.sender = this.user;
    this.message.receiver = this.messages[0].sender;
    this.agentService.respondMessage(this.crId, this.message).subscribe(
      data => {
        console.log(this.message);
        window.location.reload();
      }

    );

  }

}

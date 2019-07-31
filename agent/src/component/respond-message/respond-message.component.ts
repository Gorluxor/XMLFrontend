import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {UserService} from "../../../../client/projects/user/src/lib/user.service";
import {AuthService} from "../../../../client/projects/auth/src/lib/auth.service";
import {Message} from "../../model/Message";
import {User} from "../../model/User";
import {AgentsService} from "../../service/agents.service";

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
  user: User;

  constructor(private route: ActivatedRoute, private agentService: AgentsService, private userService: UserService, private authService:
  AuthService ) {

    this.date = new Date();

  }

  ngOnInit() {
    this.crId = +this.route.snapshot.paramMap.get('id');
    this.message = new Message();
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;
      this.agentService.getAllMessages(this.crId, this.user.id).subscribe(data1 => {
        this.messages = data1;
        console.log(this.messages);
        for (const m of this.messages) {
          m.timeStamp = new Date(m.timeStamp);
        }
      });
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

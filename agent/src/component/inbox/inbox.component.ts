import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../../../../client/projects/user/src/lib/user.service";
import {User} from "../../model/User";
import {ChatRoom} from "../../model/ChatRoom";
import {AgentsService} from "../../service/agents.service";


@Component({
  selector: 'lib-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  user: User;
  chatRooms: ChatRoom[];

  constructor(private userService: UserService, private agentService: AgentsService, private router:
    Router) { }

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;
      this.agentService.getAllChatRooms(this.user.id).subscribe(data1 => {
        this.chatRooms = data1;
        console.log(this.chatRooms);
      });
    });
  }

  onClick(id) {
    this.router.navigate(['agent/messages/' + id]);
  }

}

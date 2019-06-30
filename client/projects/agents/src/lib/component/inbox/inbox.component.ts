import { Component, OnInit } from '@angular/core';
import {AgentsService} from '../../agents.service';
import {ChatRoom} from '../../../../../../src/model/ChatRoom';
import {Router} from '@angular/router';
import {UserService} from '../../../../../user/src/lib/user.service';
import {User} from '../../../../../../src/model/User';
import {AuthService} from '../../../../../auth/src/lib/auth.service';

@Component({
  selector: 'lib-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  user: User;
  chatRooms: ChatRoom[];

  constructor(private userService: UserService, private agentService: AgentsService, private router:
    Router,   private authService: AuthService) { }

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

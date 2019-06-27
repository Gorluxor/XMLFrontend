import { Component, OnInit } from '@angular/core';
import {AgentsService} from '../../agents.service';
import {ChatRoom} from '../../../../../../src/model/ChatRoom';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  chatRooms: ChatRoom[];

  constructor(private agentService: AgentsService, private router:
    Router) { }

  ngOnInit() {
    this.agentService.getAllChatRooms().subscribe(data => {
      this.chatRooms = data;
      console.log(this.chatRooms);
    });
  }

  onClick(id) {
    this.router.navigate(['agent/messages/'+ id]);
  }

}

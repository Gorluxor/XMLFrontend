import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {User} from '../../model/User';
import {Reservation} from '../../model/Reservation';
import {AgentsService} from '../../service/agents.service';
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-agent-reservations',
  templateUrl: './agent-reservations.component.html',
  styleUrls: ['./agent-reservations.component.css']
})
export class AgentReservationsComponent implements OnInit {

  user: User;

  reservations: Reservation[];

  constructor(private userService: UserService, private authService: AuthService,
              private router: Router, private agentService: AgentsService) {}

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;

    });
    this.agentService.getReservations().subscribe(data => {
      this.reservations = data;
      console.log(this.reservations);
    });
  }

  realise(id) {
    this.agentService.realiseStay(id).subscribe( data => {
      console.log('realised reservation:');
      console.log(data);
      window.location.reload();
    });


  }
}

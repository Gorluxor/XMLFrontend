import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../../src/model/User';
import {Reservation} from '../../../../../../src/model/Reservation';
import {UserService} from '../../../../../user/src/lib/user.service';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {Router} from '@angular/router';
import {AgentsService} from '../../agents.service';

@Component({
  selector: 'lib-agent-reservations',
  templateUrl: './agent-reservations.component.html',
  styleUrls: ['./agent-reservations.component.css']
})
export class AgentReservationsComponent implements OnInit {

  user: User;

  reservations: Reservation[];

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private agentService: AgentsService) { }

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

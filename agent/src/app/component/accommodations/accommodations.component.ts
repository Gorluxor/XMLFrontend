import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../model/Accommodation';
import {Router} from '@angular/router';
import {AgentsService} from "../../service/agents.service";
import {AuthService} from "../../service/auth.service";
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {AccommodationUnit} from '../../model/AccommodationUnit';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  accommodations: Accommodation[];
  user: User;
  accommodationUnitsByAgent: AccommodationUnit[];

  accommodationsByAgent: Accommodation[];

  constructor( private agentService: AgentsService, private router: Router, private authService: AuthService, private userService : UserService) {

  }

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.agentService.getAccommodationsByAgent(this.authService.getUsername()).subscribe( data1 => {
      this.accommodations = data1.accommodationDTO;
      console.log(data1);
    });
  }

  onNew(id) {
    this.router.navigate(['./new-unit/' + id]);
  }
}

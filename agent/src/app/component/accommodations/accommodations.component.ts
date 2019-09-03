import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../model/Accommodation';
import {Router} from '@angular/router';
import {AgentsService} from "../../service/agents.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'lib-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  accommodations: Accommodation[];

  accommodationsByAgent: Accommodation[];

  constructor( private agentService: AgentsService, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.agentService.getAccommodations().subscribe( data => {
      this.accommodations = data;
    });
    this.agentService.getAccommodationsByAgent(this.authService.getUsername()).subscribe( data => {
      this.accommodationsByAgent = data;
    });
  }

  onNew(id) {
    this.router.navigate(['/agent/new-unit/' + id]);
  }
}

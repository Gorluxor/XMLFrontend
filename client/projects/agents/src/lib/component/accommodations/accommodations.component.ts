import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../model/Accommodation';
import {AgentsService} from '../../agents.service';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  accommodations: Accommodation[];

  constructor( private agentService: AgentsService, private router: Router) {

  }

  ngOnInit() {
    this.agentService.getAccommodations().subscribe( data => {
      this.accommodations = data;
    });
  }

  onNew(id) {
    this.router.navigate(['/agent/new-unit/' + id]);
  }
}

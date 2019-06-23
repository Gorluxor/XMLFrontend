import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../../agents.service';

@Component({
  selector: 'lib-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent implements OnInit {

  rsvId: number;
  reservation: any;

  constructor(private route: ActivatedRoute, private agentService: AgentsService) { }

  ngOnInit() {
    this.rsvId = +this.route.snapshot.paramMap.get('id');
    console.log(this.rsvId);
  }

  onClick(){
    this.agentService.getReservation().subscribe(data => {
      this.reservation = data;
    });
  }

}

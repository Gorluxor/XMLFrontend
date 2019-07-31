import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../model/Accommodation';
import {AccommodationUnit} from '../../model/AccommodationUnit';
import {HttpClient} from '@angular/common/http';

import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../../../client/projects/user/src/lib/user.service";
import {AuthService} from "../../../../client/projects/auth/src/lib/auth.service";
import {Reservation} from "../../model/Reservation";
import {User} from "../../model/User";
import {AgentsService} from "../../service/agents.service";


@Component({
  selector: 'lib-occupy-unit',
  templateUrl: './occupy-unit.component.html',
  styleUrls: ['./occupy-unit.component.css']
})
export class OccupyUnitComponent implements OnInit {

  selectedUnits: AccommodationUnit[];
  selectedUnit: AccommodationUnit;
  accommodations: Accommodation[];
  accommodationUnits: AccommodationUnit[];
  reservation: Reservation;
  form: FormGroup;
  user: User;
  constructor(private http: HttpClient, private agentService: AgentsService, private userService: UserService, private authService: AuthService ) {
    this.form = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.agentService.getAccommodations().subscribe( data => {
      console.log('ACCOMMODATIONS');
      console.log(data);
      this.accommodations = data;
      this.accommodationUnits = [];
      for (const a of this.accommodations) {
        for (const au of a.accommodationUnitDTO) {
          this.accommodationUnits.push(au);
        }
      }
    });
  }

  onReserve() {
    this.reservation = new Reservation();
    this.reservation.accommodationUnitDTO = this.selectedUnits;
    this.reservation.userDTO = this.user;
    this.reservation.arrivalDate = this.form.get('startDate').value;
    this.reservation.departureDate = this.form.get('endDate').value;

    this.userService.createReservation(this.reservation).subscribe( data => {
      console.log('Create reservation: ');
      console.log(data);
      this.reservation = data;
    });
  }
  onSelect(u) {
    this.selectedUnits = [];
    this.selectedUnit = u;
    this.selectedUnits.push(this.selectedUnit);
    console.log(this.selectedUnit);
  }
}

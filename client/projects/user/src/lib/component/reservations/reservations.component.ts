import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../../../../../src/model/User';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {Reservation} from '../../../../../../src/model/Reservation';

@Component({
  selector: 'lib-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {


  user: User;

  reservations: Reservation[];

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
    this.user = data;

    });
    this.userService.getReservations().subscribe(data => {
      this.reservations = data;
      console.log(this.reservations);
    });
  }
  chat(id) {
    //router.navigate(['/roles']);
  }

}

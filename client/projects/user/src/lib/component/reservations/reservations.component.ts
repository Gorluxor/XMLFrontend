import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../../../../../src/model/User';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {Reservation} from '../../../../../../src/model/Reservation';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {


  user: User;

  reservations: Reservation[];

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

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
    console.log('ID ' + id);
    this.router.navigate(['/user/chat/' + id]);
  }
  cancel(id) {
    this.userService.cancelReservation(id).subscribe( data => {
      console.log('Canceled Reservation');
      console.log(data);
      window.location.reload();
    });
  }

}

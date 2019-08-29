import { Component, OnInit } from '@angular/core';
import {AccType} from '../../../../../auth/src/lib/model/AccType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../../admin/src/lib/admin.service';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {UserService} from '../../user.service';
import {Reservation} from '../../../../../../src/model/Reservation';
import {Rating} from '../../../../../admin/src/lib/model/Rating';
import {User} from '../../../../../../src/model/User';

@Component({
  selector: 'lib-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  types: Array<Reservation>;
  user: User;
  formI: FormGroup;
  typei: Rating;
  idIzmena: number;
  izmeniForm: boolean;


  constructor(private userService: UserService, private authService: AuthService) {
    this.formI = new FormGroup({
      nameI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      rating: new FormControl('', [Validators.required,
        Validators.pattern('^[0-5]+$')])
    });
  }

  ngOnInit() {
    this.izmeniForm = false;

    this.userService.getUserByEmail(this.authService.getUsername()).subscribe( data => {
      this.user = data;

    });

    this.userService.getRealisedReservations().subscribe(data => {
        this.types = data;
        console.log('Successfull type');
      }
    );

  }

  izmeniSubmit() {
    this.typei.comment = this.formI.get('nameI').value;
    this.typei.rating_value = this.formI.get('rating').value;
   /* this.typei.user_id = this.user.id;
    this.typei.admin_approved = false;
    this.typei.reservation_id = this.idIzmena;*/

    console.log(this.typei);


    this.userService.oceni(this.typei).subscribe(data => {
        this.izmeniForm = false;
        console.log('Successfull type');
        //window.location.reload();

      }
    );
  }

  izmeni(r: Rating) {

    this.typei = new Rating();

    this.typei.user_id = this.user.id;
    this.typei.admin_approved = false;
    this.typei.reservation_id = r.id;
  //  this.typei.accommodation_id= r.accommodation_id;

    this.izmeniForm = true;
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../model/Search';
import {UserService} from '../../user.service';
import {Accommodation} from '../../../../../agents/src/lib/model/Accommodation';
import {AccommodationType} from '../../../../../agents/src/lib/model/AccommodationType';
import {AccommodationUnit} from '../../../../../agents/src/lib/model/AccommodationUnit';
import {Reservation} from '../../../../../../src/model/Reservation';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {User} from '../../../../../../src/model/User';
import {ChatRoom} from '../../../../../../src/model/ChatRoom';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search;
  form: FormGroup;
  toggleAdvanced: boolean;
  flag: boolean;
  unitsFlag: boolean;
  units: AccommodationUnit[];
  allUnits: AccommodationUnit[];
  price: number;
  priceTemp: number;
  user: User;
  chatRoom: ChatRoom;
  reservation: Reservation;

  selectedUnits: boolean[];

  allAccomodation: Accommodation[];
  accommodations: Accommodation[];

  constructor(private userService: UserService, private authService: AuthService) {
    this.chatRoom = new ChatRoom();
    this.price = 0;
    this.reservation = new Reservation();
    this.toggleAdvanced = false;
    this.flag = true;
    this.unitsFlag = false;
    this.form = new FormGroup({
      city: new FormControl('', Validators.required ),
      numberOfPeople: new FormControl('', Validators.required ),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      distance: new FormControl(),
      type: new FormControl('Hotel'),
      category: new FormControl('Uncategorized'),
      extraServices: new FormControl()
    });
    this.search = new Search();
  }

  ngOnInit() {
    this.userService.getUserByEmail(this.authService.getUsername()).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  toggleSearch() {
    this.flag = !this.flag;
  }

  onSubmit() {
      this.search.city = this.form.get('city').value;
      this.search.numberOfPeople = this.form.get('numberOfPeople').value;
      this.search.startDate = this.form.get('startDate').value;
      this.search.endDate = this.form.get('endDate').value;
      if (this.toggleAdvanced) {

        this.search.distance = this.form.get('distance').value;
        this.search.accommodationType = this.form.get('type').value;
        this.search.category = this.form.get('category').value;
        this.search.extraServices = this.form.get('extraServices').value;

        console.log(this.search.accommodationType);
        console.log(this.search);
        this.userService.advancedSearchAccommodation(this.search).subscribe(data => {
          this.accommodations = data;
          console.log(this.accommodations);

          this.flag = !this.flag;
        });

    } else {


      this.userService.searchAccommodation(this.search).subscribe(data => {
        this.accommodations = data;
        console.log(this.accommodations);
        this.flag = !this.flag;
      });
    }
  }
  onAdvanced() {
    this.toggleAdvanced = !this.toggleAdvanced;
    console.log(this.toggleAdvanced);
  }
  onChoose(id) {
    this.unitsFlag = !this.unitsFlag;
    this.userService.searchAccommodationUnits(this.search, id).subscribe(data => {
      this.allUnits = data;
      this.selectedUnits = [];
      for (const u of this.allUnits) {
        this.selectedUnits.push(false);
      }
      console.log(this.allUnits);
    });

  }
  onReserve() {
    let i = 0;
    this.units = [];
    for (const s of this.selectedUnits) {
        if (s) {
          console.log('this.allUnits[i] = ');
          console.log(this.allUnits[i].id);
          this.userService.getPricing(this.allUnits[i].id, this.search).subscribe( data => {
            this.priceTemp = data;
            console.log(data);
            this.price = this.price + this.priceTemp;
          });
          this.units.push(this.allUnits[i]);
        }
        i = i + 1;
      }
    console.log(this.units);
    this.reservation.reservationPrice = this.price;
    this.reservation.arrivalDate = this.search.startDate;
    this.reservation.departureDate = this.search.endDate;
    this.reservation.accommodationUnitDTO = this.units;
    this.reservation.userDTO = this.user;

    this.userService.createReservation(this.reservation).subscribe( data => {
      console.log('Create reservation: ');
      console.log(data);
    });
    this.userService.createChatroom(this.chatRoom).subscribe( data => {
      console.log('Create Chatroom');
      console.log(data);
    });
  }
  onSelect(index) {
    this.selectedUnits[index] = !this.selectedUnits[index];
  }
}

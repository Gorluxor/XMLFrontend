import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../model/Search';
import {UserService} from '../../user.service';
import {Accommodation} from '../../../../../agents/src/lib/model/Accommodation';
import {AccommodationType} from '../../../../../agents/src/lib/model/AccommodationType';

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

  allAccomodation: Accommodation[];
  accommodations: Accommodation[];

  constructor(private userService: UserService) {
    this.toggleAdvanced = false;
    this.flag = true;
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
  onReserve() {

  }
}

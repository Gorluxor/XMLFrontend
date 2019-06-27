import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../model/Search';
import {UserService} from '../../user.service';
import {Accommodation} from '../../../../../agents/src/lib/model/Accommodation';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search;
  form: FormGroup;
  toggleAdvanced: boolean;

  allAccomodation: Accommodation[];
  accommodations: Accommodation[];

  constructor(private userService: UserService) {
    this.toggleAdvanced = false;
    this.form = new FormGroup({
      city: new FormControl('', Validators.required ),
      numberOfPeople: new FormControl('', Validators.required ),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      distance: new FormControl('', Validators.required )
    });
    this.search = new Search();
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.toggleAdvanced) {
    } else {
      this.search.city = this.form.get('city').value;
      this.search.numberOfPeople = this.form.get('numberOfPeople').value;
      this.search.startDate = this.form.get('startDate').value;
      this.search.endDate = this.form.get('endDate').value;

      this.userService.searchAccommodation(this.search).subscribe(data => {
        this.accommodations = data;
        console.log(this.accommodations);
      });
    }
  }
  onAdvanced(){
    this.toggleAdvanced = !this.toggleAdvanced;
  }
}

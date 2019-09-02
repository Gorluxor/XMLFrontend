import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {Rating} from '../../model/Rating';

@Component({
  selector: 'lib-manage-ratings',
  templateUrl: './manage-ratings.component.html',
  styleUrls: ['./manage-ratings.component.css']
})
export class ManageRatingsComponent implements OnInit {

  ratings: Array<Rating>;


  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getRatings().subscribe( data => {
      this.ratings = data;
      console.log(this.ratings);

    });

  }

  cancel(id) {
    this.adminService.approveRating(id).subscribe( data => {
      console.log(data);
      window.location.reload();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {User} from '../../../../../../src/model/User';

@Component({
  selector: 'lib-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: User[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  activate(id) {
    this.adminService.activateUser(id).subscribe(data => {
      console.log('User Activated');
      window.location.reload();
    });

  }
  block(id) {
    this.adminService.blockUser(id).subscribe(data => {
      console.log('User Blocked');
      window.location.reload();
    });
  }
  delete(id) {
    this.adminService.deleteUser(id).subscribe(data => {
      console.log('User Deleted');
      window.location.reload();
    });
  }

}

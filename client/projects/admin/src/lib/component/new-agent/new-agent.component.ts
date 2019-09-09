import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Registration} from '../../../../../auth/src/lib/model/Registration';
import {AuthService} from '../../../../../auth/src/lib/auth.service';
import {createNotEmittedStatementWithComments} from 'tsickle/src/transformer_util';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'lib-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {

  form: FormGroup;
  private register: Registration;

  constructor(private adminService: AdminService) {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required ),
      lastName: new FormControl('', Validators.required ),
      address: new FormControl('', Validators.required),
      pib: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.register = new Registration();

    this.register.pib = this.form.get('pib').value;
    this.register.lastName = this.form.get('lastName').value;
    this.register.name = this.form.get('firstName').value;
    this.register.country = this.form.get('address').value;


    this.register.email = this.register.name + this.register.lastName+'@gmail.com';
    this.register.password = this.register.name + this.register.lastName;
    // this.register.birthday
    this.register.phoneNumber = '23532523';



    this.adminService.registerAgent(this.register).subscribe(data => {
        console.log('Successfull register');
        window.location.href = './admin/users';
      },error1 => {
        window.location.href = './admin/users';

      }
    );
  }
}

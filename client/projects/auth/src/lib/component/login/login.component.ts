import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../model/Login';
import {AuthService} from '../../auth.service';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  login: Login;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required ),
      password: new FormControl('', Validators.required )


    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.login = new Login();
    this.login.email = this.form.get('userName').value;
    this.login.password = this.form.get('password').value;
    this.authService.login(this.login).subscribe(data => {
      this.authService.saveToken(data);
      this.authService.saveUsername(jwt_decode(data).sub);
      console.log(jwt_decode(data));
      console.log('Successfull Login');
      }
    );

  }
}

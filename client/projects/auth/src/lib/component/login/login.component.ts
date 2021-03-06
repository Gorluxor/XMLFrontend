import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../model/Login';
import {AuthService} from '../../auth.service';
import * as jwt_decode from 'jwt-decode';
import {TokenPayload} from '../../TokenPayload';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  login: Login;
  authority: any;

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
      const tokenPayload: TokenPayload = jwt_decode(data);
      console.log('Successfull Login', tokenPayload.auth[0].authority);
      this.authService.saveRole(tokenPayload.auth[0].authority);

      if(this.authService.getRole() === 'ROLE_ADMIN')
      {
        window.location.href = './admin/users';
      }else
        window.location.href = './user/search';
    //  const role = this.authService.getRoleRequest(this.login.email);
      // console.log('role JE ', role);
      // this.authService.saveRole(role.toString());
      }, error1 => {
        alert('Pogresni podaci ili korisnik nije aktiviran!');
      }
    );

  }
}

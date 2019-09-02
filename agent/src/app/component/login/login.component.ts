import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Login} from '../../model/Login';
import * as jwt_decode from 'jwt-decode';
import {TokenPayload} from '../../model/TokenPayload';


@Component({
  selector: 'app-login',
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
    this.authService.loginSoap(this.login).subscribe(data => {
      console.log('DATA Login ' + data);

      this.authService.saveToken(data._return);
        this.authService.saveUsername(this.login.email);
      //  console.log(jwt_decode(data));
      //  const tokenPayload: TokenPayload = jwt_decode(data);
        console.log('Successfull Login');
        this.authService.saveRole('ROLE_AGENT');
      //  window.location.href = './inbox';
        //  const role = this.authService.getRoleRequest(this.login.email);
        // console.log('role JE ', role);
        // this.authService.saveRole(role.toString());
      }, error1 => {
        alert('Pogresni podaci ili korisnik nije aktiviran!');
      }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Registration} from "../../model/Registration";
import {PasswordValidator} from "../../validator/PasswordValidator";

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  register: Registration;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeat: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')] ),
      lastName: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')] ),
      birthday: new FormControl('', Validators.required ),
      country: new FormControl('', Validators.required ),
      telephone: new FormControl('', Validators.required ),
      email: new FormControl('', [Validators.required, Validators.email ])
    },PasswordValidator);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.register = new Registration();
    this.register.email = this.form.get('email').value;
    this.register.username = this.form.get('userName').value;
    //this.register.pib = this.form.get('pib').value;
    this.register.birthday = this.form.get('birthday').value;
    this.register.lastName = this.form.get('lastName').value;
    this.register.name = this.form.get('name').value;
    this.register.country = this.form.get('country').value;
    this.register.phoneNumber = this.form.get('telephone').value;
    this.register.password = this.form.get('password').value;
    this.register.repeatPassword = this.form.get('repeat').value;

    this.authService.register(this.register).subscribe(data => {
        console.log('Successfull register');
      }
    );

  }

}

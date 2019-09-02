import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  info: any;
  role: string;
  authority: string;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.info = {
      token : this.authService.getToken(),
      username : this.authService.getUsername()
    };

    if (this.authService.getToken()) {
      this.role = this.authService.getRole();
      if (this.role === 'ROLE_ADMIN') {
          this.authority = 'admin';
        } else if (this.role === 'ROLE_AGENT') {
          this.authority = 'agent';
        } else if (this.role === 'ROLE_USER') {
          this.authority = 'user';
        }
      } else {
      this.authority = 'user';
    }
  }

  logout() {
    this.authService.signOut();
    window.location.href = './auth/login';
  }

}

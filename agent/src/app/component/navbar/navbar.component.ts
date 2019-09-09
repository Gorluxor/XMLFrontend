import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  info: any;
  roles: string[];
  authority: boolean;
// private tokenStorage : TokenStorageService
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.getUsername()!=null)
    {
      this.authority = true;
    }
    else
    {
      this.authority=false;
    }

  /*  this.info={
      token : this.tokenStorage.getToken(),
      username : this.tokenStorage.getUsername(),
      authorities : this.tokenStorage.getAuthorities()
    };
    if(this.tokenStorage.getToken()){
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role==='ROLE_SYSADMIN'){
          this.authority = 'admin';
          return false;
        }else if (role === 'ROLE_HOTELADMIN'){
          this.authority = 'hotelAdmin';
          return false;
        }else if (role === 'ROLE_AIRADMIN'){
          this.authority='airAdmin';
          return false;
        }else if (role === 'ROLE_RACADMIN'){
          this.authority= 'racAdmin';
          return false;
        }
        this.authority ='user';
        return true;
      })
    }*/
  }

  logout() {
    this.authService.signOut();
    window.location.href = './login';
  }


}

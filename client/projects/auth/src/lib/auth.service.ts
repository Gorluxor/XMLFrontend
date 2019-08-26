import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JWT} from './model/JWT';
import {Path} from '../../../../src/model/Path';
import * as decode from 'jwt-decode';
import {TokenPayload} from './TokenPayload';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: Path;
  private roles: Array<string> = [];
  auth: any;

  constructor(private http: HttpClient) {
  this.path  = new Path();
  }

  login(login): Observable<any> {
    return this.http.post<JWT>(this.path.login, login, httpOptions);
  }

  register(register): Observable<any> {
    return this.http.post(this.path.register, register);
  }

  getRoleRequest(email: string) {
    return this.http.get(this.path.getRoleRequest + '/' + email);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
    const tokenPayload: TokenPayload = decode(token);

  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem('username');
    window.sessionStorage.setItem('username', username);
  }

  public getUsername(): string {
    return sessionStorage.getItem('username');
  }

 /* public getRole(jwt: string): string {
    const jwtData = jwt.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    console.log('jwtData: ' + jwtData);
    console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
    console.log('decodedJwtData: ' + decodedJwtData);

    this.roles = [];

    if (sessionStorage.getItem('token')) {
        this.roles.push(decodedJwtData.auth);
      };

    this.auth = (this.roles[0])[0];

    return this.auth.authority;
  }*/

  public saveRole(authorities: string) {
    window.sessionStorage.removeItem('role');
    window.sessionStorage.setItem('role', authorities);
  }

  public getRole(): string {
    return window.sessionStorage.getItem('role');
  }

  signOut() {
    window.sessionStorage.clear();
  }
}

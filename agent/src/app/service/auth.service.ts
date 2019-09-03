import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Path} from '../model/Path';
import {JWT} from '../model/JWT';
import {LoginResponse} from '../model/LoginResponse';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: Path;

  constructor(private http: HttpClient) {
  this.path  = new Path();
  }

  login(login): Observable<any> {
    return this.http.post<JWT>(this.path.login, login, httpOptions);
  }

  loginSoap(login): Observable<any> {
    return this.http.post<LoginResponse>(this.path.loginLokalno, login, httpOptions);
  }

  register(register): Observable<any> {
    return this.http.post(this.path.register, register);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
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

  public saveRole(authorities: string) {
    window.sessionStorage.removeItem('role');
    window.sessionStorage.setItem('role', authorities);
  }

  public getRole(): string {
    return window.sessionStorage.getItem('role');
  }

  public saveCR(id: number) {
    window.sessionStorage.removeItem('cr');
    window.sessionStorage.setItem('cr', String(id));
  }

  public getCR(): string {
    return window.sessionStorage.getItem('cr');
  }

  signOut() {
    window.sessionStorage.clear();
  }
}

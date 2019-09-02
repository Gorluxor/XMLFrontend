import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Path} from "../model/Path";
import {JWT} from "../model/JWT";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

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
}

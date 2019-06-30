import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JWT} from './model/JWT';
import {Path} from '../../../../src/model/Path';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  path: Path;

  constructor(private http: HttpClient) {
    this.path  = new Path();
  }

  addType(type): Observable<any> {
    return this.http.post(this.path.login, type, httpOptions);
    //PATH PROMENI
  }
/*
  register(register): Observable<any> {
    return this.http.post(this.path.register, register);
  }*/
}

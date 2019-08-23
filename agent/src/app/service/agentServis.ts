import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Path} from '../model/Path';
import {ExtraService} from '../model/ExtraService';
import {UnitType} from '../model/UnitType';
import {AccType} from '../model/AccType';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AgentServis {

  path: Path;
  constructor(private http: HttpClient) {
    this.path = new Path();
  }

  getAllTypes(): Observable<any> {
    return this.http.get(this.path.getMessages);
    // PATH
  }

  addType(type): Observable<any> {
    return this.http.post(this.path.login, type);
    // PATH PROMENI
  }

  changeType(type, id: number): Observable<any> {
    return this.http.put(this.path.login + id, type);
    // PATH PROMENI
  }

  getType(id: number): Observable<any> {
    return this.http.get<AccType>(this.path.login + id);
    // PATH PROMENI
  }

  deleteType(id: number): Observable<any> {
    return this.http.delete(this.path.login + id);
    // PATH PROMENI
  }

  getAllUnitTypes(): Observable<any> {
    return this.http.get(this.path.getMessages);
    // PATH
  }

  addUnitType(type): Observable<any> {
    return this.http.post(this.path.login, type);
    // PATH PROMENI
  }

  changeUnitType(type, id: number): Observable<any> {
    return this.http.put(this.path.login + id, type);
    // PATH PROMENI
  }

  getUnitType(id: number): Observable<any> {
    return this.http.get<UnitType>(this.path.login + id);
    // PATH PROMENI
  }

  deleteUnitType(id: number): Observable<any> {
    return this.http.delete(this.path.login + id);
    // PATH PROMENI
  }

  addService(type): Observable<any> {
    return this.http.post(this.path.login, type);
    // PATH PROMENI
  }

  changeService(type, id: number): Observable<any> {
    return this.http.put(this.path.login + id, type);
    // PATH PROMENI
  }

  getService(id: number): Observable<any> {
    return this.http.get<ExtraService>(this.path.login + id);
    // PATH PROMENI
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(this.path.login + id);
    // PATH PROMENI
  }

  dodajAgenta(agent): Observable<any> {
    return this.http.post(this.path.login, agent);
    // PATH PROMENI
  }
}

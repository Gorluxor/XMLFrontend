import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Path} from '../model/Path';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  path: Path;
  constructor(private http: HttpClient) {
    this.path = new Path();
  }

  getAllExtraServices(): Observable<any> {
    console.log(this.path.getExtraservices);
    return this.http.get(this.path.getExtraservices);
  }

  getAllUnitTypes(): Observable<any> {
    console.log(this.path.getUnitTypes);
    return this.http.get(this.path.getUnitTypes);
  }

  getReservation(): Observable<any> {
    return this.http.get(this.path.getReservation);
  }

  getAllMessages(id, id1): Observable<any> {
    return this.http.get(this.path.getMessages + id + '/' + id1);
  }

  getAllChatRooms(id): Observable<any> {
    return this.http.get(this.path.getChatRooms + id);
  }

  respondMessage(id, msg): Observable<any> {
    return this.http.put(this.path.respondMessage + id, msg, httpOptions);
  }
  getReservations(email: string): Observable<any> {
    return this.http.get(this.path.getAgentReservations+ '/' + email);
  }
  realiseStay(id): Observable<any> {
    return this.http.get(this.path.realiseStay + id, httpOptions);
  }
  getAccommodationUnits(id): Observable<any> {
    return this.http.get(this.path.getAccommodationUnits + id + '/unit', httpOptions);
  }
  getAccommodations(): Observable<any> {
    return this.http.get(this.path.getAgentAccommodations , httpOptions);
  }

  createUnit(id, accommodation): Observable<any> {
    return this.http.post(this.path.createUnit + id + '/unit' , accommodation, httpOptions
    );
  }
}

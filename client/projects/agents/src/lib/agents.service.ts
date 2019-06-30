import { Injectable } from '@angular/core';
import {Path} from '../../../../src/model/Path';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    return this.http.get(this.path.getMessages + id1 + '/chatroom/' + id);
  }

  getAllChatRooms(id): Observable<any> {
    return this.http.get(this.path.getChatRooms + id);
  }

  respondMessage(id, msg): Observable<any> {
    return this.http.post(this.path.respondMessage + id, msg, httpOptions
    );
  }
  getReservations(): Observable<any> {
    return this.http.get(this.path.getAgentReservations, httpOptions);
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

}

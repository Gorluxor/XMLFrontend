import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Path} from '../../../../src/model/Path';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path: Path;


  constructor(private http: HttpClient) {
    this.path = new Path();
  }


    searchAccommodation(search): Observable<any> {
    return this.http.post(this.path.searchAccommodation, search, httpOptions);
  }
  advancedSearchAccommodation(search): Observable<any> {
    return this.http.post(this.path.advancedSearchAccommodation, search, httpOptions);
  }
  getAllAccommodation(): Observable<any> {
    return this.http.get(this.path.getAllAccomodation);
  }
  searchAccommodationUnits(search, id): Observable<any> {
    return this.http.post(this.path.searchAccommodationUnits + id + '/normal' , search, httpOptions);
  }
  getUserByEmail(email): Observable<any> {
    return this.http.get(this.path.getUserByEmail + email);
  }
  getReservations(): Observable<any> {
    return this.http.get(this.path.getReservations);
  }
  getPricing(id, search): Observable<any> {
    console.log('id = ', id);
    return this.http.post(this.path.getPricing + id + '/search/price', search, httpOptions);
  }

  createReservation(reservation): Observable<any> {
    return this.http.post(this.path.createReservation , reservation, httpOptions);
  }
  createChatroom(chatroom): Observable<any> {
    return this.http.post(this.path.createChatRoom , chatroom, httpOptions);
  }

}

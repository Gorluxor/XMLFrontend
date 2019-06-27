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
  getAllAccommodation(): Observable<any> {
    return this.http.get(this.path.getAllAccomodation);
  }
}

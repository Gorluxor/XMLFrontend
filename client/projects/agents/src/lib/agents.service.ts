import { Injectable } from '@angular/core';
import {Path} from '../../../../src/model/Path';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  getAllMessages(): Observable<any> {
    return this.http.get(this.path.getMessages);
  }

}

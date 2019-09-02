import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Path} from '../../../../src/model/Path';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AccType} from '../../../auth/src/lib/model/AccType';
import {ExtraService} from '../../../agents/src/lib/model/ExtraService';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  path: Path;

  constructor(private http: HttpClient) {
    this.path = new Path();
  }


  registerAgent(register): Observable<any> {
    return this.http.post(this.path.registerAgent, register);
  }

  getUsers(): Observable<any> {
    console.log(this.path.getUsers);
    return this.http.get(this.path.getUsers);
  }

  activateUser(id): Observable<any> {
    return this.http.put(this.path.activateUser + id, httpOptions
    );
  }
  blockUser(id): Observable<any> {
    return this.http.put(this.path.blockUser + id, httpOptions
    );
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(this.path.deleteUser + id, httpOptions
    );
  }

  getAllTypes(): Observable<any> {
    console.log(this.path.getAllTypes);
    return this.http.get(this.path.getAllTypes);
  }

  addType(type): Observable<any> {
    return this.http.post(this.path.addType, type, httpOptions);
  }

  changeType(type): Observable<any> {
    return this.http.put(this.path.addType, type, httpOptions);
  }

  getType(id: number): Observable<any> {
    return this.http.get<AccType>(this.path.getType + '/' + id);
  }

  deleteType(id: number): Observable<any> {
    return this.http.delete(this.path.deleteType + '/' + id);
  }

  getExtraServices(): Observable<any> {
    console.log(this.path.getExtraServices);
    return this.http.get(this.path.getExtraServices);
  }

  addExtraService(type): Observable<any> {
    return this.http.post(this.path.getExtraServices, type, httpOptions);
  }

  changeExtraService(type): Observable<any> {
    return this.http.put(this.path.getExtraServices, type, httpOptions);
  }

  getExtraService(id: number): Observable<any> {
    return this.http.get<ExtraService>(this.path.getExtraServices + '/' + id);
  }

  deleteExtraService(id: number): Observable<any> {
    return this.http.delete(this.path.getExtraServices + '/' + id);
  }

  getRatings(): Observable<any> {
    console.log(this.path.getRatings);
    return this.http.get(this.path.getRatings + '/' + 'AllNotApproved');
  }

  approveRating(id: number): Observable<any> {
    return this.http.put(this.path.getRatings + '/approve/' + id, httpOptions);
  }

}

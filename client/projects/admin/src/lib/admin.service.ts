import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Path} from '../../../../src/model/Path';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
}

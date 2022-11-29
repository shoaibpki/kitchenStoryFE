import { Iadmin } from './../interface/iadmin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _rootUrl: string = "http://localhost:8082/"
  
  constructor(private http: HttpClient) { }

  // public getAdmin(uname: string, upass: string): Observable<any> {
  //   let params = new HttpParams()
  //     .set('username',uname)
  //     .set('password',upass)
  //   return this.http.get(`${this._rootUrl}admin/signin`, { params })
  // }
  public getAdmin(): Observable<Iadmin> {
    return this.http.get<Iadmin>(`${this._rootUrl}admin/list`)
  }
}

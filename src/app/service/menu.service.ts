import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private _rootUrl: string = "http://localhost:8082/"
  
  constructor(private http: HttpClient) { }

  getMenus(): Observable<any>{
      return this.http.get(`${this._rootUrl}menu/list`)
  }

  getMenuItems(id: number): Observable<any>{
    return this.http.get(`${this._rootUrl}menu/${id}`)
}

}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(request) : Observable<any> {
    return this.http.get('./assets/userLogin.json').pipe(
      map()
    )
  }

}

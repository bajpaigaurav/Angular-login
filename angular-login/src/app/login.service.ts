import { ApiEndpointsService } from './core/api-endpoints.service';
import { ApiHttpService } from './core/api-http.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserLoginResponse } from './modelObjects/userLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiHttpClient: ApiHttpService, private endpointCreationService: ApiEndpointsService) { }

  loginUser() : Observable<any> {
    return this.apiHttpClient.get(this.endpointCreationService.getLoginEndpoint())
                             .pipe(map( (response) => response as UserLoginResponse));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginObject } from '../../core/models/login-object.model';
import { Session } from '../../core/models/session.model';
import { User } from '../../core/models/user.model';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()

export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  private basePath: string = environment.apiURL;

  login(loginObj: LoginObject): Observable<Session> {
    return this.httpClient
      .post(`${this.basePath}/authenticate/login`, loginObj)
      .pipe(map((data: any) => new Session(data.token, new User(data.user.id, data.user.fullName, data.user.emailAddress))));
  }
}

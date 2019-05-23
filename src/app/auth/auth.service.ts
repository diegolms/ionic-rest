import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS:  string  =  'https://homologacao.medicinia.com.br/v1/users';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage){}

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post('https://homologacao.medicinia.com.br/v1/users/sign-in', user).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          //await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          //await this.storage.set("EXPIRES_IN", res.user.expires_in);
          //this.authSubject.next(true);
          console.log(res.user);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }


}

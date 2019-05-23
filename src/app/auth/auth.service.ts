import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, of } from  'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { Http, Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //AUTH_SERVER_ADDRESS:  string  =  'https://homologacao.medicinia.com.br/v1/users';
  apiUrl = 'https://api-homolog.medicinia.com.br/v1/users/';
  constructor(private http: HttpClient) { }

  login (data): Observable<any> {
    data = '{ "user": { "email":"'+data.email+'", "password": "'+data.password+'"}}';
    
    return this.http.post<any>(this.apiUrl + 'signin', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  // logout (): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + 'signout')
  //     .pipe(
  //       tap(_ => this.log('logout')),
  //       catchError(this.handleError('logout', []))
  //     );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }



}

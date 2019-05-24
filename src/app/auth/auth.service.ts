import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, of, BehaviorSubject  } from  'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { Http, Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://api-homolog.medicinia.com.br/v1/users/';
  authSubject  =  new  BehaviorSubject(false);
  
  
  constructor(private http: HttpClient, private  storage:  Storage) { }

  login (data): Observable<any> {
    data = '{ "user": { "email":"'+data.email+'", "password": "'+data.password+'"}}';
    
    return this.http.post<any>(this.apiUrl + 'signin', data)
      .pipe(
        tap((res: Observable<any>) => { 
        		//console.log(JSON.stringify(data));
                
            }),
        catchError(this.handleError('login', []))
     );
  }
  
  /*login(data): Observable<AuthResponse> {
  
    data = '{ "user": { "email":"'+data.email+'", "password": "'+data.password+'"}}';
  
    return this.http.post(this.apiUrl + 'signin', data).pipe(
      tap(async (res: AuthResponse) => {

		console.log("res " +res.user);
        if (res.user) {
          console.log("tem usuario "+ res.user);
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          console.log(this.storage);
          this.authSubject.next(true);
        }else{
        	console.log("nao salvou");
        }
      })
    );
  }*/

  logout (): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'signout')
      .pipe(
        tap(_ => this.log('logout')),
        catchError(this.handleError('logout', []))
      );
  }
  
  async sair() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }
  
  isLoggedIn() {
    return this.authSubject.asObservable();
  }

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

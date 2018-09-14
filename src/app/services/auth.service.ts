import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_url: string = environment.auth_url;
  private _token: string;

  private userStateChange = new BehaviorSubject(this.isAuth);
  public userState = this.userStateChange.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public get isAuth() {
    return this._token || localStorage.getItem('token');
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem('token', token)
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/login`, {email, password}, {responseType: "text"}).pipe(
      map((res: string): boolean => {
        this.token = res;
        this.userStateChange.next(this.isAuth);
        return true;
      })
    );
  }

  signup(email: string, password: string, name: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/signup`, {email, name, password}, {responseType: "text"}).pipe(
      map((res: string): boolean => {
        this.token = res;
        return true;
      })
    );
  }

  logout() {
      localStorage.removeItem('token');
      this._token = '';
      // this.userStateChange.next(this.isAuth);
      return of(false);
  }
}

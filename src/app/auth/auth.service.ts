import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  get token(): string {
    return ''
  }

  register(user: User): Observable<User> {
    return  this.http.post<User>('https://localhost:7278/BackUser/Registration', user)
  }
  login() {

  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(){

  }
}

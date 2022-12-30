import {Injectable} from '@angular/core';
import {User} from "../../../model/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return ''
  }

  register(user: User){
    return  this.http.post('https://localhost:7278/BackUser/Registration', user)
  }

  login(Email:string,Password:string) {
    return this.http.post('https://localhost:7278/BackUser/Auth',{Email,Password})
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

}

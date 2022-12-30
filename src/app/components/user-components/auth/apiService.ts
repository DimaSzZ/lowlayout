import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  constructor(private auth: AuthService) {
    const token = localStorage.getItem('auth')
    this._isLoggedIn$.next(!!token)
  }
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  login(Email:string,Password:string){
    return this.auth.login(Email, Password).pipe(
      tap((response:any) =>{
        localStorage.setItem('auth',response.token)
        this._isLoggedIn$.next(true)
      })
    )
  }
}

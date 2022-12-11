import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isShowing: boolean = true
  form : FormGroup

  constructor(private auth: AuthService,
              private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      secondName: new FormControl(null,[Validators.required]),
      Email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      phone:new FormControl(null,[Validators.required]),
    })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.form.invalid){
      return
    }
  const user:User ={
    Name : this.form.value.name,
    SecondName:this.form.value.secondName,
    Email:this.form.value.Email,
    Password:this.form.value.password,
    Phone:this.form.value.phone,
  }
    return this.auth.register(user)

  }
  close() {
    this.isShowing = false
  }
}

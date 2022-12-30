import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-files/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RegisterComponent,LoginComponent,HttpClientModule]
})
export class UserComponentModule {}

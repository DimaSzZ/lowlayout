import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RegisterComponent,LoginComponent,HttpClientModule]
})
export class AuthModule {}

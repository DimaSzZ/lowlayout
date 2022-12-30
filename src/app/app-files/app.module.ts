import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserComponentModule} from "../components/user-components/user-component.module";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SidePanelComponent} from "../components/side-panel/side-panel.component";


@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
  ],
  imports: [
    BrowserModule,
    UserComponentModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

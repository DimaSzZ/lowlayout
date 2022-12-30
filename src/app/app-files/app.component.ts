import { Component } from '@angular/core';
import {ApiService} from "../components/user-components/auth/apiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lowlayout';
  constructor(public apiService:ApiService) {
  }
}

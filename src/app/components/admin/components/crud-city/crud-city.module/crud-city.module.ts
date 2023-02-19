import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatecComponent} from "../components/createc/createc.component";
import {UpdatecComponent} from "../components/updatec/updatec.component";
import {DeletecComponent} from "../components/deletec/deletec.component";
import {CrudCityRoutingModule} from "./crud-city-routing.module";


@NgModule({
  declarations: [
    CreatecComponent,
    UpdatecComponent,
    DeletecComponent,
  ],
  imports: [
    CommonModule,
    CrudCityRoutingModule
  ]
})
export class CrudCityModule { }

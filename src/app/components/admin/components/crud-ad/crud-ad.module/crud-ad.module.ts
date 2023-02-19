import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrudAdRouting} from "./crud-ad-routing.module";
import {CreateComponent} from "../components/create/create.component";
import {UpdateComponent} from "../components/update/update.component";
import {DeleteComponent} from "../components/delete/delete.component";

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    CrudAdRouting
  ]
})
export class CrudAdModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatecsComponent} from "../components/createcs/createcs.component";
import {UpdatecsComponent} from "../components/updatecs/updatecs.component";
import {DeletecsComponent} from "../components/deletecs/deletecs.component";
import {CrudCategorySubcategoryRoutingModule} from "./crud-category-subcategory-routing.module";

@NgModule({
  declarations: [
    CreatecsComponent,
    UpdatecsComponent,
    DeletecsComponent
  ],
  imports: [
    CommonModule,
    CrudCategorySubcategoryRoutingModule
  ]
})
export class CrudCategorySubcategoryModule { }

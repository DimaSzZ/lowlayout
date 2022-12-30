import {ShowProductsComponent} from "./show-products/show-products.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "../../app-files/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductUnitOpenComponent } from './product-unit-open/product-unit-open.component';


@NgModule({
  declarations: [
   ShowProductsComponent,
   ProductUnitComponent,
   ProductCrudComponent,
   ProductUnitOpenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ShowProductsComponent]
})
export class ProductComponentsModule {}

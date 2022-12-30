import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CudAdComponent } from './components/crud-ad/cud-ad.component';
import { CudCategorySubcategoryComponent } from './components/crud-category-subcategory/cud-category-subcategory.component';
import { CudCityComponent } from './components/crud-city/cud-city.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {SearchComponent} from "../search/search.component";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CudAdComponent,
    CudCategorySubcategoryComponent,
    CudCityComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

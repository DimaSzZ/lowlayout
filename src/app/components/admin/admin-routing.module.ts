import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {
  CudCategorySubcategoryComponent
} from "./components/crud-category-subcategory/cud-category-subcategory.component";
import {CudAdComponent} from "./components/crud-ad/cud-ad.component";
import {CudCityComponent} from "./components/crud-city/cud-city.component";

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
    children:[
      {path: 'home',component:HomeComponent},
      {path: 'cud-cat',component:CudCategorySubcategoryComponent},
      {path: 'crud-ad',component:CudAdComponent},
      {path: 'crud-city',component:CudCityComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

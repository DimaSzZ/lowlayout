import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
    children:[
      {path: 'home',component:HomeComponent},
      {path: 'crud-cat',
        loadChildren: () => import('../admin/components/crud-category-subcategory/crud-category-subcategory.module/crud-category-subcategory.module')
          .then((m) =>m.CrudCategorySubcategoryModule)},
      {path: 'crud-ad',
        loadChildren: () => import('../admin/components/crud-ad/crud-ad.module/crud-ad.module')
          .then((m) =>m.CrudAdModule)},
      {path: 'crud-city',
        loadChildren: () => import('../admin/components/crud-city/crud-city.module/crud-city.module')
          .then((m) =>m.CrudCityModule)}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

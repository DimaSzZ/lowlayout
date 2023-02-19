import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CreatecsComponent} from "../components/createcs/createcs.component";
import {UpdatecsComponent} from "../components/updatecs/updatecs.component";
import {DeletecsComponent} from "../components/deletecs/deletecs.component";
import {CudCategorySubcategoryComponent} from "../cud-category-subcategory.component";

const routes: Routes = [
  {
    path: '', component: CudCategorySubcategoryComponent,
    children: [
      {path: 'create', component: CreatecsComponent},
      {path: 'update', component: UpdatecsComponent},
      {path: 'delete', component: DeletecsComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudCategorySubcategoryRoutingModule {

}

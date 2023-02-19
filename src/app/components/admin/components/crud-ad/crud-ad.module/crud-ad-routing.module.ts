import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateComponent} from "../components/create/create.component";
import {UpdateComponent} from "../components/update/update.component";
import {DeleteComponent} from "../components/delete/delete.component";
import {CudAdComponent} from "../cud-ad.component";

const routes: Routes = [
  {
    path: '', component: CudAdComponent,
    children: [
      {path: 'create', component: CreateComponent},
      {path: 'update', component: UpdateComponent},
      {path: 'delete', component: DeleteComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAdRouting {
}

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreatecComponent} from "../components/createc/createc.component";
import {UpdatecComponent} from "../components/updatec/updatec.component";
import {DeletecComponent} from "../components/deletec/deletec.component";
import {CudCityComponent} from "../cud-city.component";

const routes: Routes = [
  {
    path: '', component: CudCityComponent,
    children: [
      {path: 'create', component: CreatecComponent},
      {path: 'update', component: UpdatecComponent},
      {path: 'delete', component: DeletecComponent},

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CrudCityRoutingModule {
}

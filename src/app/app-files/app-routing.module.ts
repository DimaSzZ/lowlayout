import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../components/user-components/auth/login/login.component";
import {RegisterComponent} from "../components/user-components/auth/register/register.component";
import {AuthGuard} from "../components/user-components/auth/auth.guard";
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {
    path:'admin',
    loadChildren: () => import('../components/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }

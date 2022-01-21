import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { AddformComponent } from './addform/addform.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path: 'addform',
    component: AddformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

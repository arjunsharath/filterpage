import { IdComponent } from './idgen/id/id.component';
import { IdgenModule } from './idgen/idgen.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './details/table/table.component';
import { HomeModule } from './home/home.module';
import { HomecComponent } from './home/homec/homec.component';
import { PrintbtnComponent} from './idgen/printbtn/printbtn.component'



const routes: Routes = [
  { 
    path:'details',
    component:TableComponent
  },
  {
    path: '',
    component: HomecComponent
  },
  {
    path: 'idgen',
    component: IdComponent
  },
  {
    path: 'idgen',
    component: PrintbtnComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

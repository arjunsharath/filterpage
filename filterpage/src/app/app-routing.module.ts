import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './details/table/table.component';
import { HomeModule } from './home/home.module';
import { HomecComponent } from './home/homec/homec.component';

const routes: Routes = [
  { 
    path:'details',
    component:TableComponent
  },
  {
    path: '',
    component: HomecComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

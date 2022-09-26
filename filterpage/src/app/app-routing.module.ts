import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './details/table/table.component';
import { HomeModule } from './home/home.module';
import { HomecComponent } from './home/homec/homec.component';
import { IdComponent } from './idgen/id/id.component';
import { IdprintComponent } from './idgen/idprint/idprint.component';
import { UploadComponent } from './trainee-uploaddoc/upload/upload.component';

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
  path:'trainee-uploaddoc',
  component: UploadComponent
  },
  {
  path:'id',
  component: IdComponent
  },
  {
    path:'idprint',
    component:IdprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './details/table/table.component';
import { HomeModule } from './home/home.module';
import { HomecComponent } from './home/homec/homec.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

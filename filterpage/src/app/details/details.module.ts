import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PrintidComponent } from './printid/printid.component';
import { IdComponent } from './id/id.component';


@NgModule({
  declarations: [
    TableComponent,
    PrintidComponent,
    IdComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DetailsModule { }

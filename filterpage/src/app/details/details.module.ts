import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PrintidComponent } from './printid/printid.component';


@NgModule({
  declarations: [
    TableComponent,
    PrintidComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class DetailsModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { IdprintComponent } from './idprint/idprint.component';




@NgModule({
  declarations: [
    IdComponent,IdprintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IdgenModule { }

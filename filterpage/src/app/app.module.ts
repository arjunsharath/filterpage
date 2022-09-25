import { IdComponent } from './idgen/id/id.component';
import { PrintbtnComponent } from './idgen/printbtn/printbtn.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsModule } from './details/details.module';
import { TableComponent } from './details/table/table.component';
import { IdgenModule } from './idgen/idgen.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    IdComponent,
    PrintbtnComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

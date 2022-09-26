
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdgenModule } from './idgen/idgen.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdgenModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

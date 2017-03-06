import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Materialize
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuLateralDirective } from './menu-lateral.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLateralComponent,
    MenuLateralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
     // Materialize  
   ,MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

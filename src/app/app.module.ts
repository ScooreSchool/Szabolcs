import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { AdatmentesComponent } from './adatmentes/adatmentes.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { KeresesComponent } from './kereses/kereses.component';
import { StatisztikaComponent } from './statisztika/statisztika.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    AdatkezelesComponent,
    AdatmentesComponent,
    BejelentkezesComponent,
    KeresesComponent,
    StatisztikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

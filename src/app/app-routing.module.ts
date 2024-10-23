import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { AdatmentesComponent } from './adatmentes/adatmentes.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { KeresesComponent } from './kereses/kereses.component';
import { StatisztikaComponent } from './statisztika/statisztika.component';

const routes: Routes = [
  {path:'', component: FooldalComponent},
  {path:'adatkezeles', component: AdatkezelesComponent},
  {path:'adatmentes', component: AdatmentesComponent},
  {path:'bejelentkezes', component: BejelentkezesComponent},
  {path:'kereses', component: KeresesComponent},
  {path:'statisztika', component: StatisztikaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

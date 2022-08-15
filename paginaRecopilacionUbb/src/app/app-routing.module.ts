import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoAnioComponent } from './components/cuarto-anio/cuarto-anio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PrimerAnioComponent } from './components/primer-anio/primer-anio.component';
import { QuintoAnioComponent } from './components/quinto-anio/quinto-anio.component';
import { SegundoAnioComponent } from './components/segundo-anio/segundo-anio.component';
import { TercerAnioComponent } from './components/tercer-anio/tercer-anio.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'up', component:UploadComponent},
  {path: 'primer', component:PrimerAnioComponent},
  {path: 'segundo', component:SegundoAnioComponent},
  {path: 'tercero', component:TercerAnioComponent},
  {path: 'cuarto', component:CuartoAnioComponent},
  {path: 'quinto', component:QuintoAnioComponent},
  


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

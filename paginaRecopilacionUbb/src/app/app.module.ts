  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UploadService } from './services/upload.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from "@angular/forms";


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//import components

import { UploadComponent } from './components/upload/upload.component';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { PrimerAnioComponent } from './components/primer-anio/primer-anio.component';
import { SegundoAnioComponent } from './components/segundo-anio/segundo-anio.component';
import { TercerAnioComponent } from './components/tercer-anio/tercer-anio.component';
import { CuartoAnioComponent } from './components/cuarto-anio/cuarto-anio.component';
import { QuintoAnioComponent } from './components/quinto-anio/quinto-anio.component';




@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    PrimerAnioComponent,
    SegundoAnioComponent,
    TercerAnioComponent,
    CuartoAnioComponent,
    QuintoAnioComponent,
  

    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
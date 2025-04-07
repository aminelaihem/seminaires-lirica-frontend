// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeminairesListComponent } from './seminaires-list/seminaires-list.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeminairesListComponent
    // ... autres composants si nécessaire
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // ... autres modules si nécessaire
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { TempConverterService } from './services/temp-converter.service';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesRawComponent } from './components/movies/components/movies-raw/movies-raw.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDataService } from './services/movies-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavComponent,
    HomeComponent,
    MoviesComponent,
    MoviesRawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TempConverterService, MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

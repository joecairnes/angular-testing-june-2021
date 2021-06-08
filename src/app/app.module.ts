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
import { MoviesReduxComponent } from './components/movies/components/movies-redux/movies-redux.component';
import { MoviesReduxEntryComponent } from './components/movies/components/movies-redux-entry/movies-redux-entry.component';
import { MoviesReduxListComponent } from './components/movies/components/movies-redux-list/movies-redux-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavComponent,
    HomeComponent,
    MoviesComponent,
    MoviesRawComponent,
    MoviesReduxComponent,
    MoviesReduxEntryComponent,
    MoviesReduxListComponent
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

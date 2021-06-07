import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { TempConverterService } from './services/temp-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TempConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

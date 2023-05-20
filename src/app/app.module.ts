import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidosModule } from './partidos/partidos.module';
import { EquiposModule } from './equipos/equipos.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidosModule,
    EquiposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

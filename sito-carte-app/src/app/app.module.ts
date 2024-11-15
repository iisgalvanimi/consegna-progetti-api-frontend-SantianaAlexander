import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Carta1Component } from './carta1/carta1.component';
import { Carta2Component } from './carta2/carta2.component';
import { Carta3Component } from './carta3/carta3.component';
import { Carta4Component } from './carta4/carta4.component';
import { Carta5Component } from './carta5/carta5.component';

@NgModule({
  declarations: [
    AppComponent,
    Carta1Component,
    Carta2Component,
    Carta3Component,
    Carta4Component,
    Carta5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

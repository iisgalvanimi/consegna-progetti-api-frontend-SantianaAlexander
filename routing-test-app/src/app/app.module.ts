import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponentComponent } from './animal-component/animal-component.component';
import { FruitComponentComponent } from './fruit-component/fruit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponentComponent,
    FruitComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

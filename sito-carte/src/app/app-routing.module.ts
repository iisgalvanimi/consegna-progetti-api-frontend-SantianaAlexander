import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Carta1Component } from './carta1/carta1.component';
import { Carta2Component } from './carta2/carta2.component';
import { Carta3Component } from './carta3/carta3.component';
import { Carta4Component } from './carta4/carta4.component';
import { Carta5Component } from './carta5/carta5.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'carta1', component: Carta1Component},
  {path:'carta2', component: Carta2Component},
  {path:'carta3', component: Carta3Component},
  {path:'carta4', component: Carta4Component},
  {path:'carta5', component: Carta5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule, HttpClientModule
  ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }

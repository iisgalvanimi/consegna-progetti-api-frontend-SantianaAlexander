import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponentComponent } from './animal-component/animal-component.component';
import { FruitComponentComponent } from './fruit-component/fruit-component.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponentComponent},
  { path: 'fruits', component: FruitComponentComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

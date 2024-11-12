import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponentComponent } from './animal-component/animal-component.component';
import { FruitComponentComponent } from './fruit-component/fruit-component.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponentComponent},
  { path: 'fruits', component: FruitComponentComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: GenericComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

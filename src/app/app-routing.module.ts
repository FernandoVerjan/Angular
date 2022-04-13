import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes  = [
  {path: 'index', component: PokelistComponent },
  {path: 'pokemon-details', component: PokemonDetailsComponent},  
  {path: '404', component: NotFoundComponent},  
  {path: '', redirectTo: 'index', pathMatch:'full' },
  {path: '**', redirectTo: '404', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

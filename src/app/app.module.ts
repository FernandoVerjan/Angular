import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonCardComponent } from './Components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokemonDetailsComponent,
    NotFoundComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

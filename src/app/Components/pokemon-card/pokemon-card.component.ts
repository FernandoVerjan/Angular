import { Component, OnInit } from '@angular/core';
import { PokemonDetailsComponent } from 'src/app/pokemon-details/pokemon-details.component';
import { PokeApiService } from 'src/app/Services/poke-api.service';
import { Pokemon } from 

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})

export class PokemonCardComponent implements OnInit {

  @Input('pokemon') pokemon: Pokemon = New Pokemon;

  pokemonDetails: PokemonDetails = new PokemonDetails;


  constructor(private pokeService: PokeApiService) { }

  ngOnInit(): void {
  }

}

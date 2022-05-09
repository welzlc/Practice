import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Poke } from '../../poke';
import { PokeService } from '../../poke.service';
import { loadPokemon } from '../../state/poke.action';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Poke[] = [];
  @Input() isLoading = false;

  // TODO: create selector and read data from state once available > Observable here

  constructor() {}

  ngOnInit(): void {
    // this.pokeService.getAll();
    // TODO: dispatch loadPokemon action
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Poke } from '../poke';
import { PokeService } from '../poke.service';
import { loadPokemon } from '../state/poke.action';
import { selectAllPokemon, selectIsLoading } from '../state/poke.selector';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.css'],
})
export class PokemonContainer implements OnInit {
  // TODO: create selector and read data from state once available > Observable here
  //public pokeSelector = this.store.select<Poke[]>(selectAllPokemon).subscribe();
  pokeList = this.store.select(selectAllPokemon);
  isLoading = this.store.select(selectIsLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // TODO: dispatch loadPokemon action
    this.store.dispatch(loadPokemon());
  }
}

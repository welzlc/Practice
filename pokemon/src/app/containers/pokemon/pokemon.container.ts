import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokeDetails, loadPokemon } from '../../state/poke.action';
import {
  selectAllPokemon,
  selectIsError,
  selectIsLoading,
} from '../../state/poke.selector';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon.container.html',
})
export class PokemonContainer implements OnInit {
  pokeList = this.store.select(selectAllPokemon);
  isLoading = this.store.select(selectIsLoading);
  isError = this.store.select(selectIsError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPokemon());
  }

  loadPokeDetails(url: string): void {
    this.store.dispatch(loadPokeDetails({ url }));
  }
}

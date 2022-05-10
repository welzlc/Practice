import { createAction, props } from '@ngrx/store';
import { Poke } from '../interfaces/poke';

export const loadPokemon = createAction('[Pokemon Component] Load Pokemon');
export const loadPokemonSuccess = createAction(
  '[Pokemon Component] Pokemon Loaded Success',
  props<{ pokemon: Poke[] }>()
);
export const loadPokemonFailed = createAction(
  '[Pokemon Component] Pokemon Loaded Failed'
);

export const loadPokeDetails = createAction(
  '[PokeDetails Component] Load Poke Details',
  props<{ id: number }>()
);

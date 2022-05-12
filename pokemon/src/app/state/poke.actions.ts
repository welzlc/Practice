import { createAction, props } from '@ngrx/store';
import { Poke } from '../interfaces/poke';
import { PokeDetails } from '../interfaces/poke-details';
//Pokemon
export const loadPokemon = createAction('[Pokemon Component] Load Pokemon');
export const loadPokemonSuccess = createAction(
  '[Pokemon Component] Pokemon Loaded Success',
  props<{ pokemon: Poke[] }>()
);
export const loadPokemonFailed = createAction(
  '[Pokemon Component] Pokemon Loaded Failed'
);

//PokeDetails
export const loadPokeDetails = createAction(
  '[PokeDetails Component] Load Poke Details',
  props<{ url: string }>()
);
export const loadPokeDetailsSuccess = createAction(
  '[PokeDetails Component] Poke Details Loaded Success',
  props<{ pokeDetails: PokeDetails }>()
);
export const loadPokeDetailsFailed = createAction(
  '[PokeDetails Component] Poke Details Loaded Failed'
);

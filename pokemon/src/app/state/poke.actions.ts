import { createAction, props } from '@ngrx/store';
import { Poke } from '../interfaces/poke';
import { PokeDetails } from '../interfaces/poke-details';
import {
  loadPokemonActionType,
  loadPokemonFailedActionType,
  loadPokemonSuccessActionType,
} from './poke.action-types';
//Pokemon
export const loadPokemon = createAction(loadPokemonActionType);
export const loadPokemonSuccess = createAction(
  loadPokemonSuccessActionType,
  props<{ pokemon: Poke[] }>()
);
export const loadPokemonFailed = createAction(loadPokemonFailedActionType);

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

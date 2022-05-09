import { createAction, props } from '@ngrx/store';
import { Poke } from '../poke';

export const loadPokemon = createAction('[Pokemon Component] Load Pokemon');
export const loadPokemonSuccess = createAction(
  '[Pokemon Component] Pokemon Loaded Success',
  props<{ pokemons: Poke[] }>()
);
export const loadPokemonFailure = createAction(
  '[Pokemon Component] Pokemon Loaded Failure'
);

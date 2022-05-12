import { createReducer, on } from '@ngrx/store';
import {
  loadPokemon,
  loadPokemonFailed,
  loadPokemonSuccess,
} from './poke.actions';
import { initialPokeState } from './poke.state';

export const pokeReducer = createReducer(
  initialPokeState,
  on(loadPokemon, (state) => {
    console.log('[loadPokemon] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }),
  on(loadPokemonSuccess, (state, { pokemon }) => {
    console.log('[loadPokemonSuccess] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: false,
      isError: false,
      data: pokemon,
    };
  }),
  on(loadPokemonFailed, (state) => {
    console.log('[loadPokemonFailed] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  })
);

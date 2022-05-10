import { createReducer, on } from '@ngrx/store';
import { Poke } from '../interfaces/poke';
import {
  loadPokeDetails,
  loadPokemon,
  loadPokemonFailed,
  loadPokemonSuccess,
} from './poke.action';
import { initialState } from './poke.state';

export const pokeReducer = createReducer(
  initialState,
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
  }),
  on(loadPokeDetails, (state) => {
    console.log('[loadPokeDetails] original state', JSON.stringify(state));
    return {
      ...state,
    };
  })
);

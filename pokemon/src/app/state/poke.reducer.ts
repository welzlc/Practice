import { createReducer, on } from '@ngrx/store';
import { Poke } from '../poke';
import { loadPokemon, loadPokemonSuccess } from './poke.action';

export type PokeState = {
  isLoading: boolean;
  data: Poke[];
};

const initialState: PokeState = {
  isLoading: false,
  data: [],
};

export const pokeReducer = createReducer(
  initialState,
  on(loadPokemon, (state) => {
    console.log('[loadPokemon] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadPokemonSuccess, (state, { pokemons }) => {
    console.log('[loadPokemonSuccess] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: false,
      data: pokemons,
    };
  })
);

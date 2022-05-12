import { createReducer, on } from '@ngrx/store';
import {
  loadPokeDetails,
  loadPokeDetailsFailed,
  loadPokeDetailsSuccess,
} from './poke.actions';
import { initialPokeDetailsState } from './pokeDetails.state';

export const pokeDetailsReducer = createReducer(
  initialPokeDetailsState,
  on(loadPokeDetails, (state) => {
    console.log('[loadPokeDetails] original state', JSON.stringify(state));
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadPokeDetailsSuccess, (state, { pokeDetails }) => {
    console.log(
      '[loadPokeDetailsSuccess] original state',
      JSON.stringify(state)
    );
    return {
      ...state,
      isLoading: false,
      isError: false,
      pokeDetails: pokeDetails,
    };
  }),
  on(loadPokeDetailsFailed, (state) => {
    console.log(
      '[loadPokeDetailsFailed] original state',
      JSON.stringify(state)
    );
    return {
      ...state,
      isLoading: false,
      isError: true,
      pokeDetails: undefined,
    };
  })
);

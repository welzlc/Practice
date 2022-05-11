import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { PokeState } from './poke.state';

export const selectPokeState = createFeatureSelector<PokeState>('poke');

export const selectAllPokemon = createSelector(selectPokeState, (state) => {
  console.log(state);
  return state.data;
});

export const selectPokeDetails = createSelector(selectPokeState, (state) => {
  console.log(state);
  return state.currentPokeDetails;
});

export const selectIsLoading = createSelector(
  selectPokeState,
  (state) => state.isLoading
);

export const selectIsError = createSelector(
  selectPokeState,
  (state) => state.isError
);

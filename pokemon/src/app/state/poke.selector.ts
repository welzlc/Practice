import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { PokeState } from './poke.reducer';

export const selectPokeState = createFeatureSelector<PokeState>('poke');

export const selectAllPokemon = createSelector(selectPokeState, (state) => {
  console.log(state);
  return state.data;
});

export const selectIsLoading = createSelector(
  selectPokeState,
  (state) => state.isLoading
);

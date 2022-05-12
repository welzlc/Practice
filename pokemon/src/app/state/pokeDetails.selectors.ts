import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokeDetailsState } from './pokeDetails.state';

export const selectPokeDetailsState =
  createFeatureSelector<PokeDetailsState>('pokeDetails');

export const selectPokeDetails = createSelector(
  selectPokeDetailsState,
  (state) => {
    return state.pokeDetails;
  }
);

export const selectIsLoading = createSelector(
  selectPokeDetailsState,
  (state) => state.isLoading
);

export const selectIsError = createSelector(
  selectPokeDetailsState,
  (state) => state.isError
);

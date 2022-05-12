import { PokeDetails } from '../interfaces/poke-details';

export type PokeDetailsState = {
  isLoading: boolean;
  isError: boolean;
  pokeDetails?: PokeDetails;
};

export const initialPokeDetailsState: PokeDetailsState = {
  isLoading: false,
  isError: false,
  pokeDetails: undefined,
};

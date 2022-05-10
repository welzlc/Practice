import { Poke } from '../interfaces/poke';
import { PokeDetails } from '../interfaces/poke-details';

export type PokeState = {
  isLoading: boolean;
  isError: boolean;
  data: Poke[];
  currentPokeDetails: PokeDetails | undefined;
};

export const initialState: PokeState = {
  isLoading: false,
  isError: false,
  data: [],
  currentPokeDetails: undefined,
};

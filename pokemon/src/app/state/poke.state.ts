import { Poke } from '../interfaces/poke';
import { PokeDetails } from '../interfaces/poke-details';

export type PokeState = {
  isLoading: boolean;
  isError: boolean;
  data: Poke[];
};

export const initialPokeState: PokeState = {
  isLoading: false,
  isError: false,
  data: [],
};

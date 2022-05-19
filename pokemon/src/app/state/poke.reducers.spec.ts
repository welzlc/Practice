import { pokeArrayMock, pokeStateMock } from '../interfaces/mock-data';
import { Poke } from '../interfaces/poke';
import {
  loadPokemon,
  loadPokemonFailed,
  loadPokemonSuccess,
} from './poke.actions';
import { pokeReducer } from './poke.reducers';
import { initialPokeState, PokeState } from './poke.state';

describe('poke.reducers.ts', () => {
  describe('loadPokemon', () => {
    it('should return loading state', () => {
      const input: PokeState = pokeStateMock;
      const expected: PokeState = {
        ...input,
        isLoading: true,
        isError: false,
      };
      const actual = pokeReducer(input, loadPokemon());
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('loadPokemonSuccess', () => {
    it('should return loaded state', () => {
      const input: PokeState = {
        ...pokeStateMock,
        isLoading: true,
        isError: false,
      };
      const expected: PokeState = {
        ...input,
        isLoading: false,
        isError: false,
        data: pokeArrayMock,
      };
      const actual = pokeReducer(
        input,
        loadPokemonSuccess({ pokemon: pokeArrayMock })
      );
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('loadPokemonFailed', () => {
    it('should return failed state', () => {
      const input: PokeState = {
        ...pokeStateMock,
        isLoading: true,
        isError: false,
      };
      const expected: PokeState = {
        ...input,
        isLoading: false,
        isError: true,
      };
      const actual = pokeReducer(input, loadPokemonFailed());
      expect(actual).toStrictEqual(expected);
    });
  });
});

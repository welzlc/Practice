import { pokeArrayMock, pokeStateMock } from '../interfaces/mock-data';
import {
  selectAllPokemon,
  selectIsError,
  selectIsLoading,
} from './poke.selectors';
import { PokeState } from './poke.state';

const loadedPokeStateMock: PokeState = {
  ...pokeStateMock,
  data: pokeArrayMock,
};

describe('poke.selectors.ts', () => {
  describe('selectAllPokemon', () => {
    it('should return a Pokemon array', () => {
      const pokeArray = selectAllPokemon.projector(loadedPokeStateMock);
      expect(pokeArray).toStrictEqual(pokeArrayMock);
    });
  });
  describe('selectIsLoading', () => {
    it('should be false', () => {
      const actual: boolean = selectIsLoading.projector(pokeStateMock);
      expect(actual).toStrictEqual(false);
    });
    it('should be true', () => {
      const pokeStateLoadingMock: PokeState = {
        ...pokeStateMock,
        isLoading: true,
        isError: false,
      };
      const actual: boolean = selectIsLoading.projector(pokeStateLoadingMock);
      expect(actual).toStrictEqual(true);
    });
  });
  describe('selectIsError', () => {
    it('should be false', () => {
      const actual: boolean = selectIsError.projector(pokeStateMock);
      expect(actual).toStrictEqual(false);
    });
    it('should be true', () => {
      const pokeStateErrorMock: PokeState = {
        ...pokeStateMock,
        isLoading: false,
        isError: true,
      };
      const actual: boolean = selectIsError.projector(pokeStateErrorMock);
      expect(actual).toStrictEqual(true);
    });
  });
});

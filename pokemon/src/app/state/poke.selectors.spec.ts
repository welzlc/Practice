import { pokeArrayMock, pokeStateMock } from '../interfaces/mock-data';
import { selectAllPokemon } from './poke.selectors';
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
});

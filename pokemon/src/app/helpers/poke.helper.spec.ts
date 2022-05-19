import { Poke } from '../interfaces/poke';
import { PokeServerResult } from '../interfaces/server';
import { mapPokeServerResult } from './poke.helper';

describe('poke.helper.ts', () => {
  describe('mapPokeServerResult', () => {
    it('should return valid client data', () => {
      const input: PokeServerResult = {
        count: 1,
        next: 'next',
        results: [{ name: 'poke-1', url: 'poke-1-url' }],
      };
      const expected: Poke[] = [{ id: 0, name: 'poke-1', url: 'poke-1-url' }];
      const actual = mapPokeServerResult(input);
      expect(actual).toStrictEqual(expected);
    });

    it('should return an empty array', () => {
      const input: PokeServerResult = {
        count: 1,
        next: 'next',
        results: [],
      };
      const expected: Poke[] = [];
      const actual = mapPokeServerResult(input);
      expect(actual).toStrictEqual(expected);
    });
  });
});

import {
  pokeDetailsMock,
  pokeDetailsServerMock,
} from '../interfaces/mock-data';
import { PokeDetails, PokeDetailsStat } from '../interfaces/poke-details';
import {
  PokeDetailsServer,
  PokeDetailsStatsServer,
} from '../interfaces/server';
import {
  mapPokeDetailsServer,
  mapPokeDetailsStatsServer,
} from './pokeDetails.helper';

describe('pokeDetails.helper.ts', () => {
  describe('mapPokeDetailsStatsServer', () => {
    const name = 'stat-1';
    const value = 42;
    it('should return mapped pokeDetailsStats', () => {
      const input: PokeDetailsStatsServer = {
        base_stat: value,
        stat: { name: name },
      };
      const expected: PokeDetailsStat = {
        name: name,
        value: value,
      };
      const actual = mapPokeDetailsStatsServer(input);
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('mapPokeDetailsServer', () => {
    const name = 'stat-1';
    const value = 42;
    it('should return mapped pokeDetails', () => {
      const input: PokeDetailsServer = pokeDetailsServerMock;
      const expected: PokeDetails = pokeDetailsMock;
      const actual = mapPokeDetailsServer(input);
      expect(actual).toStrictEqual(expected);
    });
  });
});

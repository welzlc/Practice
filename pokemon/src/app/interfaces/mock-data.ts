import { map, of } from 'rxjs';
import { mapPokeDetailsServer } from '../helpers/pokeDetails.helper';
import { initialPokeState } from '../state/poke.state';
import { Poke } from './poke';
import { PokeDetails, PokeDetailsStat } from './poke-details';
import {
  PokeDetailsServer,
  PokeDetailsStatServer,
  PokeServerResult,
} from './server';

export const pokeStateMock = initialPokeState;

export const pokeArrayMock: Poke[] = [
  { id: 0, name: 'poke-0', url: 'poke-0-url' },
  { id: 1, name: 'poke-1', url: 'poke-1-url' },
];

export const pokeServerResultMock: PokeServerResult = {
  count: 1,
  next: 'next',
  results: [{ name: 'poke-1', url: 'poke-1-url' }],
};

const statMock: PokeDetailsStatServer = {
  name: 'stat-1',
};
export const pokeDetailsServerMock: PokeDetailsServer = {
  id: 0,
  name: 'poke-0-name',
  sprites: { front_default: 'poke-0-spriteUrl' },
  stats: [{ base_stat: 42, stat: { name: 'stat-1' } }],
};

//export const pokeDetailsMock: PokeDetails = of(pokeDetailsServerMock).pipe(map(mapPokeDetailsServer));
const pokeDetailsStatsMock: PokeDetailsStat[] = [{ name: 'stat-1', value: 42 }];
export const pokeDetailsMock: PokeDetails = {
  id: 0,
  name: 'poke-0-name',
  spriteUrl: 'poke-0-spriteUrl',
  stats: pokeDetailsStatsMock,
};

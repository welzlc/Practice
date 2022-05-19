import { Poke } from '../interfaces/poke';
import { PokeServer, PokeServerResult } from '../interfaces/server';

export const mapPokeServerResult = (data: PokeServerResult): Poke[] => {
  console.log(data);
  return data.results.map(mapPokeServer);
};

export const mapPokeServer = (result: PokeServer, index: number): Poke => ({
  id: index,
  ...result,
});

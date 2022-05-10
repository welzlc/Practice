import { PokeServer, PokeServerResult } from '../interfaces/server';

export const mapPokeServerResult = (data: PokeServerResult) => {
  console.log(data);
  return data.results.map(mapPokeServer);
};

export const mapPokeServer = (result: PokeServer, index: number) => ({
  id: index,
  ...result,
});

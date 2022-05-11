import {
  PokeDetailsServer,
  PokeDetailsStatsServer,
  PokeServer,
  PokeServerResult,
} from '../interfaces/server';

export const mapPokeServerResult = (data: PokeServerResult) => {
  console.log(data);
  return data.results.map(mapPokeServer);
};

export const mapPokeServer = (result: PokeServer, index: number) => ({
  id: index,
  ...result,
});

export const mapPokeDetailsServer = (data: PokeDetailsServer) => {
  console.dir(data);

  return {
    id: data.id,
    name: data.name,
    stats: data.stats.map(mapPokeDetailsStatsServer),
    spriteUrl: data.sprites.front_default,
  };
};

export const mapPokeDetailsStatsServer = (stats: PokeDetailsStatsServer) => {
  return { name: stats.stat.name, value: stats.base_stat };
};

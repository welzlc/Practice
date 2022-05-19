import { PokeDetails } from '../interfaces/poke-details';
import {
  PokeDetailsServer,
  PokeDetailsStatsServer,
} from '../interfaces/server';

export const mapPokeDetailsServer = (data: PokeDetailsServer): PokeDetails => {
  //console.dir(data);
  return {
    id: data.id,
    name: data.name,
    stats: data.stats.map(mapPokeDetailsStatsServer),
    spriteUrl: data.sprites.front_default,
  };
};

export const mapPokeDetailsStatsServer = (stats: PokeDetailsStatsServer) => {
  //console.dir(stats);
  return { name: stats.stat.name, value: stats.base_stat };
};

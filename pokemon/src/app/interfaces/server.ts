export const ServerUrl = 'https://pokeapi.co/api/v2/pokemon/';

export interface PokeServer {
  name: string;
  url: string;
}

export interface PokeServerResult {
  count: number;
  next: string;
  results: PokeServer[];
}

export interface PokeDetailsServer {
  id: number;
  name: string;
  sprites: SpriteServer;
  stats: [];
}

export interface SpriteServer {
  front_default: string;
}

export interface PokeDetailsStatsServer {
  base_stat: number;
  stat: PokeDetailsStatServer;
}

export interface PokeDetailsStatServer {
  name: string;
}

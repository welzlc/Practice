export interface PokeDetails {
  id: number;
  name: string;
  url: string;
  spriteUrl: string;
  stats: PokeDetailsStat[];
}

export interface PokeDetailsStat {
  name: string;
  value: number;
}

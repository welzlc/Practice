export interface PokeServer {
  name: string;
  url: string;
}

export interface PokeServerResult {
  count: number;
  next: string;
  results: PokeServer[];
}

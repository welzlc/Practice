import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Poke } from './poke';
import { HttpClient } from '@angular/common/http';

export interface PokeServer {
  name: string;
  url: string;
}

export interface PokeServerResult {
  count: number;
  next: string;
  results: PokeServer[];
}

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Poke[]> {
    return this.http.get<PokeServerResult>(this.pokeURL).pipe(
      map((data) => {
        console.log(data);
        return data.results.map((result, index) => ({
          id: index,
          ...result,
        }));
      })
    );
  }
}

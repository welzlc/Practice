import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Poke } from '../interfaces/poke';
import { HttpClient } from '@angular/common/http';
import { mapPokeServer, mapPokeServerResult } from '../state/poke.helper';
import { PokeServerResult } from '../interfaces/server';
import { PokeDetails } from '../interfaces/poke-details';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Poke[]> {
    return this.http
      .get<PokeServerResult>(this.pokeURL)
      .pipe(map(mapPokeServerResult));
  }

  getPokeDetailsById(id: number): void /*Observable<PokeDetails>*/ {}
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Poke } from '../interfaces/poke';
import { HttpClient } from '@angular/common/http';
import {
  mapPokeDetailsServer,
  mapPokeServer,
  mapPokeServerResult,
} from '../state/poke.helper';
import { PokeDetailsServer, PokeServerResult } from '../interfaces/server';
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

  getPokeDetailsByUrl(url: string): Observable<any> {
    return this.http
      .get<PokeDetailsServer>(url)
      .pipe(map(mapPokeDetailsServer));
  }
}

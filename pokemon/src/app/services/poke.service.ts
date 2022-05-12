import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Poke } from '../interfaces/poke';
import { HttpClient } from '@angular/common/http';
import { mapPokeServerResult } from '../helpers/poke.helper';
import {
  PokeDetailsServer,
  PokeServerResult,
  ServerUrl,
} from '../interfaces/server';
import { mapPokeDetailsServer } from '../helpers/pokeDetails.helper';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Poke[]> {
    return this.http
      .get<PokeServerResult>(ServerUrl)
      .pipe(map(mapPokeServerResult));
  }

  getPokeDetailsByUrl(url: string): Observable<any> {
    return this.http
      .get<PokeDetailsServer>(url)
      .pipe(map(mapPokeDetailsServer));
  }
}

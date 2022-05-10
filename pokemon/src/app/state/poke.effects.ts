import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
import { PokeService } from '../services/poke.service';
import {
  loadPokeDetails,
  loadPokemon,
  loadPokemonSuccess,
} from './poke.action';

@Injectable()
export class PokeEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      switchMap(() =>
        this.pokeService
          .getAll()
          .pipe(map((pokemon) => loadPokemonSuccess({ pokemon })))
      )
    )
  );

  /*
  loadPokeDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokeDetails),
      switchMap(() =>
      this.pokeService.getP)
    )
  )
  */

  constructor(private actions$: Actions, private pokeService: PokeService) {}
}

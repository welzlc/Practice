import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PokeService } from '../services/poke.service';
import {
  loadPokeDetails,
  loadPokeDetailsFailed,
  loadPokeDetailsSuccess,
  loadPokemon,
  loadPokemonFailed,
  loadPokemonSuccess,
} from './poke.actions';

@Injectable()
export class PokeEffects {
  loadPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPokemon),
      switchMap(() =>
        this.pokeService.getAll().pipe(
          map((pokemon) => loadPokemonSuccess({ pokemon })),
          catchError(() => of(loadPokemonFailed()))
        )
      )
    );
  });

  constructor(private actions$: Actions, private pokeService: PokeService) {}
}

@Injectable()
export class PokeDetailsEffects {
  loadPokeDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokeDetails),
      switchMap((pokeDetails) =>
        this.pokeService.getPokeDetailsByUrl(pokeDetails.url).pipe(
          map((pokeDetails) => loadPokeDetailsSuccess({ pokeDetails })),
          catchError(() => of(loadPokeDetailsFailed()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private pokeService: PokeService) {}
}

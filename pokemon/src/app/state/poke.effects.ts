import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from "rxjs";
import { PokeService } from "../poke.service";
import { loadPokemon, loadPokemonSuccess } from "./poke.action";

@Injectable()
export class PokeEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      switchMap(() => this.pokeService.getAll()
        .pipe(
          map(pokemons => loadPokemonSuccess({ pokemons}))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private pokeService: PokeService
  ) {}
}

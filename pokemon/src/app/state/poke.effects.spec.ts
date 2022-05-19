import { HttpErrorResponse } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { pokeArrayMock, pokeStateMock } from '../interfaces/mock-data';
import { PokeService } from '../services/poke.service';
import {
  loadPokemonFailedActionType,
  loadPokemonSuccessActionType,
} from './poke.action-types';
import { loadPokemon } from './poke.actions';
import { PokeEffects } from './poke.effects';
import { PokeState } from './poke.state';

const pokeServiceMock: Partial<PokeService> = {
  getAll: () => of(pokeArrayMock),
};

const loadPokemonSuccessStateMock: PokeState = {
  ...pokeStateMock,
  data: pokeArrayMock,
};

const pokeServiceFailedMock: Partial<PokeService> = {
  getAll: () => {
    return throwError(
      new HttpErrorResponse({ error: { code: 500, message: 'call failed' } })
    );
  },
};

describe('poke.effects.ts', () => {
  describe('loadPokemon', () => {
    const actions = of(loadPokemon());
    it('should dispatch loadPokemonSuccess action', (done) => {
      const effect = createPokeEffects(actions, pokeServiceMock);
      effect.loadPokemon$.subscribe((action) => {
        expect(action).toEqual({
          type: loadPokemonSuccessActionType,
          pokemon: pokeArrayMock,
        });
        done();
      });
    });

    it('should dispatch loadPokemonFailed action', (done) => {
      const effect = createPokeEffects(actions, pokeServiceFailedMock);
      effect.loadPokemon$.subscribe((action) => {
        expect(action).toEqual({
          type: loadPokemonFailedActionType,
        });
        done();
      });
    });
  });
});

function createPokeEffects(
  actions: Actions,
  pokeService: Partial<PokeService>
) {
  return new PokeEffects(actions, pokeService as PokeService);
}

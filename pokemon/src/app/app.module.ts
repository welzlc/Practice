import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonContainer } from './containers/pokemon/pokemon.container';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { pokeReducer } from './state/poke.reducers';
import { PokeDetailsEffects, PokeEffects } from './state/poke.effects';
import { PokeDetailsComponent } from './components/poke-details/poke-details/poke-details.component';

import { PokeDetailsContainer } from './containers/poke-details/poke-details.container';
import { pokeDetailsReducer } from './state/pokeDetails.reducers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonContainer,
    PokeDetailsComponent,
    PokeDetailsContainer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ poke: pokeReducer, pokeDetails: pokeDetailsReducer }),
    EffectsModule.forRoot([PokeEffects, PokeDetailsEffects]),
    RouterModule.forRoot([
      { path: 'pokemon', component: PokemonContainer },
      { path: 'pokemon/:id', component: PokeDetailsContainer },
      //{ path: 'rxjs'}
      { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

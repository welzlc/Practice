import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPokeDetails } from 'src/app/state/poke.selector';

@Component({
  selector: 'app-poke-details-container',
  templateUrl: './poke-details.container.html',
})
export class PokeDetailsContainer implements OnInit {
  pokeDetails = this.store.select(selectPokeDetails);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}

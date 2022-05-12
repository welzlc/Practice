import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServerUrl } from 'src/app/interfaces/server';
import { loadPokeDetails } from 'src/app/state/poke.actions';
import {
  selectIsError,
  selectIsLoading,
  selectPokeDetails,
} from 'src/app/state/pokeDetails.selectors';

@Component({
  selector: 'app-poke-details-container',
  templateUrl: './poke-details.container.html',
})
export class PokeDetailsContainer implements OnInit {
  isLoading = this.store.select(selectIsLoading);
  isError = this.store.select(selectIsError);
  pokeDetails = this.store.select(selectPokeDetails);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')! + 1;
    const url = ServerUrl + id;
    console.log('PokeDetails onInit!');
    this.store.dispatch(loadPokeDetails({ url }));
  }
}

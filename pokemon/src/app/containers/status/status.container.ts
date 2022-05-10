import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsError, selectIsLoading } from '../../state/poke.selector';

@Component({
  selector: 'app-status-container',
  templateUrl: './status.container.html',
})
export class StatusContainer implements OnInit {
  isLoading = this.store.select(selectIsLoading);
  isError = this.store.select(selectIsError);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsError, selectIsLoading } from 'src/app/state/poke.selector';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell.container.html',
})
export class ShellContainer implements OnInit {
  isLoading = this.store.select(selectIsLoading);
  isError = this.store.select(selectIsError);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}

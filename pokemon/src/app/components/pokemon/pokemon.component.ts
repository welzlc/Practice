import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poke } from '../../interfaces/poke';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Poke[] = [];
  @Input() isLoading = false;
  @Input() isError = false;

  @Output() pokemonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
